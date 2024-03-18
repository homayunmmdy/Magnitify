import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const commentsSchema = new Schema(
  {
    title: String,
    content: String,
  },
  {
    timestamps: true,
  }
);

const Comments = mongoose.models.Comments || mongoose.model("Comments", commentsSchema);

export default Comments;