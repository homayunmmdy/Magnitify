import mongoose, { Schema } from "mongoose";
import "../ConnetDB"; // Ensure the database connection is established
import { defaultSchemaOptions } from "../schemaOptions"; // Importing default schema options

/**
 * Schema definition for the Post model.
 * @typedef {Object} PostSchema
 * @property {string} _id - The unique identifier for the comment.
 * @property {string} postId - The unique identifier of the post this comment belongs to.
 * @property {string} name - The name of the commenter.
 * @property {string} email - The email of the commenter.
 * @property {string} message - The content of the comment.
 * @property {string} createdAt - The timestamp when the comment was created.
 * @property {string} updatedAt - The timestamp when the comment was last updated.
 * @property {number} __v - The version key for the comment (used by MongoDB).
 */
const CommentsSchema = new Schema(
  {
    postId: String,
    name: String,
    email: String,
    message: String,
  },
  defaultSchemaOptions
);

/**
 * Comment model representing a comment in the database.
 * If the model already exists, it reuses it; otherwise, it creates a new one.
 * @type {mongoose.Model}
 */
const Comments =
  mongoose.models.Comments || mongoose.model("Comments", CommentsSchema);

export default Comments;
