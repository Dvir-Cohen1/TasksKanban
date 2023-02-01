import yup from "yup";
import { passwordRegex } from "../../constants/regex.constants.js";
import { USER_ROLE } from "../../constants/user.constants.js";

const loginRequestSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required().matches(passwordRegex),
});

const registerRequestSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required().matches(passwordRegex),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
  role: yup.mixed().oneOf(Object.values(USER_ROLE)),
  lastName: yup.string().required(),
  firstName: yup.string().required(),
});

export { loginRequestSchema, registerRequestSchema };
