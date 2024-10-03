import mongoose, { Schema } from "mongoose";
//@ts-ignore
mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const TextAdvSchema = new Schema(
  {
    textadvid: Number,
    advname: String,
    body: String,
    link: String,
  },
  {
    timestamps: true,
  }
);

const TextAdv =
  mongoose.models.TextAdv || mongoose.model("TextAdv", TextAdvSchema);

export default TextAdv;
