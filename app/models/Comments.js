import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const commentsSchema = new Schema(
  {
    name: String,
    email: String,
    message: String,
  },
  {
    timestamps: true,
  }
);

const Comments = mongoose.models.Comments || mongoose.model("Comments", commentsSchema);

export default Comments;