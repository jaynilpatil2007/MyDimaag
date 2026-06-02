import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt, { type SignOptions } from "jsonwebtoken";
import { ApiError } from "../utils/ApiError.js";

import type { IUser, IUserMethods, Usermodel } from "../types/user.types.js";

const userSchema = new mongoose.Schema<IUser, Usermodel, IUserMethods>(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    refreshToken: {
      type: String,
    },
  },
  { timestamps: true },
);

userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.isPasswordCorrect = async function (password: string) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateAccessToken = function () {
  const accessSecret = process.env.ACCESS_TOKEN_SECRET;

  if (!accessSecret)
    throw new ApiError(500, "Access Token secret is not configured");

  return jwt.sign(
    {
      _id: this._id,
      username: this.username,
    },
    accessSecret,
    {
      expiresIn: "15m",
    },
  );
};

userSchema.methods.generateRefreshToken = function () {
  const refreshSecret = process.env.REFRESH_TOKEN_SECRET;

  if (!refreshSecret)
    throw new ApiError(500, "Refresh token secret is not configured");

  return jwt.sign(
    {
      _id: this._id,
    },
    refreshSecret,
    {
      expiresIn: "7d",
    },
  );
};

export const User = mongoose.model<IUser, Usermodel>("User", userSchema);
