import mongoose from "mongoose";
import { type IContent, contentTypes } from "../types/content.types.js";

const contentSchema = new mongoose.Schema<IContent>(
  {
    link: {
      type: String,
      required: true,
    },
    types: {
      type: String,
      enum: contentTypes,
      required: true,
    },
    tags: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tag",
      },
    ],
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    title: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

export const Content = mongoose.model<IContent>("Content", contentSchema);
