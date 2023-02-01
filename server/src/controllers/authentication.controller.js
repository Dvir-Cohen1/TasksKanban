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

export async function register(req, res, next) {
  try {
    if (!req.body) return next(new BadRequestError());
    const user = await User.create(req.body);

    user.save((error) => {
      if (error) return next(new ServerError(error));
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

    const accessToken = JwtTokenService.createAccessToken(user._id);
    const refreshToken = JwtTokenService.createRefreshToken(user._id);

    user.setJwtTokens(accessToken, refreshToken);

    res.send({ jwt_ac_token: accessToken });
  } catch (error) {
    // console.log(error)
    next(new ServerError(error));
  }
}
export function logout(req, res, next) {
  req.logout();
  res.clearCookie("access_token");
  res.send({ message: "You have been logged out." });
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
    next();
  } catch (error) {
    return next(new ServerError(error.message));
  }
}
