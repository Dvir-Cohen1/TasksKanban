import { BadRequestError, UnauthorizeError } from "../errors/Errors.js";

/**
 * @params {object} yup validate schema
 * @params {object} request body
 * @params {function} next function
 * least one numeric digit, one uppercase and one lowercase letter
 */
const requestValidator = async (
  requestSchema,
  requestBody,
  nextErrorHandler
) => {
  const isValid = await requestSchema.isValid(requestBody);
  console.log(isValid)
  if (!isValid) return nextErrorHandler(new BadRequestError());
};

export default requestValidator;
