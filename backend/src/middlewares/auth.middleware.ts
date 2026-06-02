import { asynHandler } from "../utils/asyncHandlers.js";
import { ApiError } from "../utils/ApiError.js";
import jwt, { type JwtPayload } from "jsonwebtoken";
import { User } from "../models/User.model.js";

interface DecodedToken extends JwtPayload {
  _id: string;
}

export const verifyJWT = asynHandler(async (req, res, next) => {
  const token =
    req.cookies?.accessToken ||
    req.header("Authorization")?.replace("Bearer ", "");
  if (!token) throw new ApiError(401, "Unauthorized request");

  try {
    const decodedToken = jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET!,
    ) as DecodedToken;

    const user = await User.findById(decodedToken._id).select(
      "-password -refreshToken",
    );
    if (!user) throw new ApiError(401, "Invalid Access Token");

    req.user = user;
    next();
  } catch (error) {
    throw new ApiError(
      500,
      error instanceof Error ? error.message : "Invalid access Token",
    );
  }
});
