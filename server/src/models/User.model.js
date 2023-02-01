import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

import { USER_ROLE } from "../constants/user.constants.js";
import { emailRegex } from "../constants/regex.constants.js";

const SALT_ROUNDS = 10;
const userSchema = new Schema({
  username: {
    type: String,
    require: [true, "Username is required."],
    unique: [true, "Username already exist."],
  },
  email: {
    type: String,
    require: [true, "Email is required."],
    unique: [true, "Email already exist."],
    match: [emailRegex],
  },
  firstName: {
    type: String,
    required: [true, "FirstName is required."],
  },
  lastName: {
    type: String,
    required: [true, "LastName is required."],
  },
  password: {
    type: String,
    required: [true, "Password is required."],
  },
  role: {
    type: String,
    enum: Object.values(USER_ROLE),
    default: USER_ROLE.ADMIN,
    required: false,
  },
  jwt_ac_token: {
    type: String,
  },
  jwt_rf_token: {
    type: String,
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
  next();
});

userSchema.methods.comparePassword = async function (plainPassword) {
  const isMatch = await bcrypt.compare(plainPassword, this.password);
  return isMatch;
};

userSchema.methods.setJwtTokens = function (accessToken, refreshToken) {
  this.jwt_ac_token = accessToken;
  this.jwt_rf_token = refreshToken;
  this.save();
};

userSchema.methods.setAccessToken = function (accessToken) {
  this.jwt_ac_token = accessToken;
  this.save();
};

const User = model("User", userSchema);
export default User;
