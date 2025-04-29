import { defineMongooseModel } from "#nuxt/mongoose";
import { Schema } from "mongoose";

export const PostSchema = defineMongooseModel("Post", {
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
    parent?: string;
    createdAt: string;
    updatedAt: string;
}