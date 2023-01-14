import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";
const SALT_ROUNDS = 10;
const userSchema = new Schema({
  username: {
    type: String,
    require: true,
    unique: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
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
