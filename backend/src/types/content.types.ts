import { Types } from "mongoose";

export const contentTypes = [
  "youtube",
  "twitter",
  "article",
  "document",
] as const;

export type ContentType = (typeof contentTypes)[number];

export interface IContent {
  link: string;
  types: ContentType;
  userId: Types.ObjectId;
  tags: Types.ObjectId[];
  title: string;
}
