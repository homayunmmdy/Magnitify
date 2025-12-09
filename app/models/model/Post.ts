import mongoose, { Schema } from "mongoose";
import "../ConnetDB"; // Ensure the database connection is established
import { defaultSchemaOptions } from "../schemaOptions"; // Importing default schema options

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    imgURL: {
      type: String,
      required: true,
    },
    fields: [
      {
        key: {
          type: String,
          required: true,
        },
        value: {
          type: String,
          required: true,
        },
      },
    ],
    body: {
      type: String,
      required: true,
    },
  },
  defaultSchemaOptions
);

const Post = mongoose.models.Post || mongoose.model("Post", postSchema);

export default Post;
