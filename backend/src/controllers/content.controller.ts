import { asynHandler } from "../utils/asyncHandlers.js";
import { ApiError } from "../utils/ApiError.js";
import { Content } from "../models/Content.model.js";
import { ApiResponse } from "../utils/ApiResponses.js";

export const createContent = asynHandler(async (req, res) => {
  const { link, types, tags, title } = req.body;
  if (!link || !types || !title) {
    throw new ApiError(400, "Link, types, and title are required");
  }

  const userId = req.user?._id;
  if (!userId) throw new ApiError(401, "User not authenticated");

  const content = await Content.create({
    link,
    types,
    tags,
    title,
    userId: userId,
  });

  if (!content) throw new ApiError(400, "Failed to create content");

  return res
    .status(201)
    .json(new ApiResponse(200, content, "Content created successfully"));
});

export const getContents = asynHandler(async (req, res) => {
  const userId = req.user?._id;
  if (!userId) throw new ApiError(401, "User not authenticated");

  const contents = await Content.find({ userId: userId }).populate(
    "userId",
    "username",
  );
  if (contents.length === 0)
    throw new ApiError(404, "No content found for this user");

  return res
    .status(200)
    .json(new ApiResponse(200, contents, "Contents retrieved successfully"));
});

export const deleteContent = asynHandler(async (req, res) => {
  const contentId = req.params._id;
  if (!contentId) throw new ApiError(400, "Content ID is required");

  const userId = req.user?._id;
  if (!userId) throw new ApiError(401, "User not authenticated");

  const content = await Content.findOneAndDelete({
    _id: contentId,
    userId: userId,
  });

  if (!content)
    throw new ApiError(404, "Content not found or not owned by user");

  return res
    .status(200)
    .json(new ApiResponse(200, content, "Content deleted successfully"));
});
