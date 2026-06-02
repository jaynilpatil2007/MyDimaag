import { Model } from "mongoose";

export interface IUser {
  username: string;
  password: string;
  refreshToken: string;
}

export interface IUserMethods {
  isPasswordCorrect(password: string): Promise<boolean>;
  generateAccessToken(): string;
  generateRefreshToken(): string;
}

export type Usermodel = Model<IUser, {}, IUserMethods>;
