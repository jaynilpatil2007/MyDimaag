import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponses.js";
import { asynHandler } from "../utils/asyncHandlers.js";
import { User } from "../models/User.model.js";

const generateAccessRefreshToken = async (userId: string) => {
  try {
    const user = await User.findById(userId);
    if (!user) throw new ApiError(404, "User not found");

    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: true });

    return {
      accessToken,
      refreshToken,
    };
  } catch (error) {
    console.log("Error: ", error);
    throw new ApiError(
      500,
      "Something went wrong while generating access and refresh token",
    );
  }
};

export const signup = asynHandler(async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password)
    throw new ApiError(400, "Username and Password required");

  if (password.length < 6)
    throw new ApiError(400, "Password must contain 6 characters");

  const existedUser = await User.findOne({ username });
  if (existedUser)
    throw new ApiError(
      400,
      "Username is already exist, you must have different username",
    );

  const user = await User.create({
    username,
    password,
  });

  const { accessToken, refreshToken } = await generateAccessRefreshToken(
    user._id.toString(),
  );

  const createdUser = await User.findById(user._id.toString());
  if (!createdUser)
    throw new ApiError(500, "Something went wrong while registering the user");

  const options = {
    httpOnly: true,
    secure: false,
  };

  return res
    .status(201)
    .cookie("accessToken", accessToken)
    .cookie("refreshToken", refreshToken)
    .json(new ApiResponse(200, createdUser, "User registered successfull"));
});

export const login = asynHandler(async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) throw new ApiError(400, "Fill all credentials");

  const user = await User.findOne({ username });
  if (!user) throw new ApiError(400, "User not found");

  const isPasswordValid = await user.isPasswordCorrect(password);
  if (!isPasswordValid) throw new ApiError(400, "Incorrect Password");

  const { accessToken, refreshToken } = await generateAccessRefreshToken(
    user._id.toString(),
  );

  const options = {
    httpOnly: true,
    secure: false,
  };

  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(new ApiResponse(200, user, "Login successfully"));
});

export const logout = asynHandler(async (req, res) => {
  await User.findByIdAndUpdate(
    req.user._id,
    {
      $set: { refreshToken: undefined },
    },
    {
      new: true,
    },
  );

  const options = {
    httpOnly: true,
    secure: false,
  };

  return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, {}, "Logout successfully"));
});
