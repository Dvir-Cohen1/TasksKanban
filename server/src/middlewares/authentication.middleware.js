import { verifyAccessToken } from "../services/jwt.services.js";
// import { JsonWebTokenError, TokenExpiredError } from "JsonWebToken";
import { UnauthorizeError } from "../errors/Errors.js";
import * as authController from "../controllers/authentication.controller.js";
import * as cookieHelper from "../helpers/cookies.helper.js";

export const authJwtToken = async (req, res, next) => {
  try {
    const token = req.headers["access-token"];
    if (!token) return next(new UnauthorizeError());

    const decoded = verifyAccessToken(token);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    // if (error instanceof TokenExpiredError) {
    //   return await authController.createNewAccessToken(req, res, next);
    // }
    // if (error instanceof JsonWebTokenError) {
    //   return next(new UnauthorizeError(error.message));
    // }
    console.log(error)
  }
};
