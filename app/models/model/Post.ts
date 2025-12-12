import mongoose, { Schema } from "mongoose";
import "../ConnetDB"; // Ensure the database connection is established
import { defaultSchemaOptions } from "../schemaOptions"; // Importing default schema options

const postSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
    },
    imgurl: {
      type: String,
    },
    fields: [
      {
        key: {
          type: String,
        },
        value: {
          type: String,
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
