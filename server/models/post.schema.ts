// ~/server/models/post.schema.ts
import { defineMongooseModel } from "#nuxt/mongoose";
import { Schema } from "mongoose";

export const Post = defineMongooseModel({ // モデルをエクスポート
  name: "Post",
  schema: {
    name: {
      type: String,
    },
    text: {
      type: String,
      required: true,
    },
    parent: {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
  },
  options: {
    timestamps: true,
  },
});

export interface PostResponse {
  _id: string;
  name?: string;
  text: string;
  parent?: PostResponse;
  createdAt: string;
  updatedAt: string;
}