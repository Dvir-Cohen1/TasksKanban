import {
  NotFoundError,
  BadRequestError,
  UnauthorizeError,
  ServerError,
} from "../errors/Errors.js";
import * as JwtTokenService from "../services/jwt.services.js";
import User from "../models/User.model.js";
import { verifyAccessToken } from "../services/jwt.services.js";
import { getCookieValue } from "../helpers/cookies.helper.js";
import RequestValidationService from "../services/request-validation.service.js";
import { SELECTED_USERS_FIELDS } from "../constants/user.constants.js";

export async function register(req, res, next, redirect = true) {
  try {
    await RequestValidationService.registerValidation(req.body, next);
    const newUser = new User(req.body);

    newUser.save((error) => {
      if (error) {
        console.log(error);
        return next(new ServerError(error));
      }

      if (!redirect) {
        return res.status(200).send({ error: false, message: "User Created!" });
      }
      return res.redirect(307, "/auth/login");
    });
  } catch (error) {
    next(new ServerError(error));
  }
}

export async function login(req, res, next) {
  try {
    await RequestValidationService.loginValidation(req.body, next);
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return next(new NotFoundError());
    const isPasswordMatch = await user.comparePassword(password);
    if (!isPasswordMatch) return next(new UnauthorizeError());

    const jwt_ac_token = JwtTokenService.createAccessToken(user._id);
    const jwt_rf_token = JwtTokenService.createRefreshToken(user._id);

    user.setJwtTokens(jwt_ac_token, jwt_rf_token);
    res.send({ jwt_ac_token });
  } catch (error) {
    next(new ServerError(error));
  }
}

export async function logout(req, res, next) {
  const { token } = req.body;
  // return console.log(req.userId);
  const user = await User.findOne({ jwt_ac_token: token });
  if (!user) return res.end();
  user.jwt_ac_token = undefined;
  user.save();
  res.send({ error: false, messgae: "You have been logged out" });
}

export async function createNewAccessToken(req, res, next) {
  try {
    const refreshToken = getCookieValue(req.headers.cookie, "refreshToken");
    if (!refreshToken) return next(new UnauthorizeError());

    const user = await User.findOne({ jwt_rf_token: refreshToken });
    if (!user) return next(new UnauthorizeError());

    verifyAccessToken(refreshToken);

    user.jwt_ac_token = generateAccessToken(user.id);
    user.save();

    res.cookie("accessToken", user.jwt_ac_token);
    req.headers[("access-token", user.jwt_ac_token)];
    next();
  } catch (error) {
    return next(new ServerError(error));
  }
}

export async function isLogin(req, res, next) {
  try {
    const token = req.query.ac_token || req.body.ac_token;
    if (!token) return next(new UnauthorizeError("Token is required"));
    const decoded = JwtTokenService.verifyAccessToken(token);
    const { userId } = decoded;
    const user = await User.findById(userId).select(SELECTED_USERS_FIELDS);
    res.status(200).send(user);
  } catch (error) {
    next(new UnauthorizeError());
  }
}
