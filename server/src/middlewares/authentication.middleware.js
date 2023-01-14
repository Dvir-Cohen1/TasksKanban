// import { verifyAccessToken } from "../helpers/token.helper.js";
// import { JsonWebTokenError, TokenExpiredError } from "jsonwebtoken";
// import { UnauthorizeError } from "../errors/Error.js";
// import { UnauthorizeError } from "../errors/Errors.js";
import * as authController from "../controllers/authentication.controller.js";
import * as cookieHelper from "../helpers/cookies.helper.js";

export const authJwtToken = async (req, res, next) => {
  try {
    const accessToken = cookieHelper.getCookieValue(
      req.headers.cookie,
      "accessToken"
    );
    if (!accessToken) return next(new UnauthorizeError());

    const decoded = verifyAccessToken(accessToken);
    req.user = decoded;
    next();
  } catch (error) {
    if (error instanceof TokenExpiredError) {
      return await authController.createNewAccessToken(req, res, next);
    }
    if (error instanceof JsonWebTokenError) {
      return next(new UnauthorizeError(error.message));
    }
  }
};
