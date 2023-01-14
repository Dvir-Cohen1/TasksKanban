export class NotFoundError extends Error {
  constructor(message) {
    super(message || "Not Found");
  }
}

export class UnauthorizeError extends Error {
  constructor(message) {
    super(message || "Unauthorize");
  }
}

export class BadRequestError extends Error {
  constructor(message) {
    super(message || "Bad Request");
  }
}
export class ServerError extends Error {
  constructor(message) {
    super(message || "Somthing went wrong");
  }
}
