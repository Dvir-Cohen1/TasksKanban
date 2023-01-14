import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
dotenv.config();

const jwtConfig = {
  ac_secret: "process.env.JWT_ACCESS_TOKEN_SECRET",
  rf_secret: process.env.JWT_REFRESH_TOKEN_SECRET,
  ac_expired_millisecond: process.env.JWT_ACCESS_TOKEN_EXPIRED_MILLISECONDS, // 1 hour
};

export const createAccessToken = (userId) => {
  try {
    const token = jwt.sign({ userId }, jwtConfig.ac_secret, {
      expiresIn: jwtConfig.ac_expired_millisecond,
    });
    return token;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const createRefreshToken = (userId) => {
  try {
    const token = jwt.sign({ userId }, jwtConfig.rf_secret);
    return token;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const verifyAccessToken = (token) => {
  try {
    const decoded = jwt.verify(token, jwtConfig.ac_secret);
    return decoded;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
