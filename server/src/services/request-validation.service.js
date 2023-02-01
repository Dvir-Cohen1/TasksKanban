import {
  loginRequestSchema,
  registerRequestSchema,
} from "../validators/schema/authRequests.schema.js";
import requestValidator from "../validators/request.validator.js";

const loginValidation = async (requestBody, nextFunction) => {
  await requestValidator(loginRequestSchema, requestBody, nextFunction);
};

const registerValidation = async (requestBody, nextFunction) => {
  await requestValidator(registerRequestSchema, requestBody, nextFunction);
};

export default {
  loginValidation,
  registerValidation,
};
