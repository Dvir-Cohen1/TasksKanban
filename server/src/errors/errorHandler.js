import {
  NotFoundError,
  UnauthorizeError,
  BadRequestError,
  ServerError,
} from "./Errors.js";

function generateCustomErrorResponse(res, error, statusCode) {
  return res.json({
    error: true,
    message: error.message,
    stack: process.env.NODE_ENV === "development" ? error.stack : {},
  });
}

export default function errorHandler(error, req, res, next) {
  switch (error.constructor) {
    case NotFoundError:
      return generateCustomErrorResponse(res, error, 404);

    case UnauthorizeError:
      return generateCustomErrorResponse(res, error, 403);

    case BadRequestError:
      generateCustomErrorResponse(res, error, 400);
      break;

    case ServerError:
      generateCustomErrorResponse(res, error, 500);
      break;

    default:
      res.status(500).json("Somthing went wrong!");
      break;
  }
}
