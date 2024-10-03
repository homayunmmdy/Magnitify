import mongoose, { Schema } from "mongoose";
//@ts-ignore
mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const EmailsSchema = new Schema(
  {
    emails: String,
  },
  {
    timestamps: true,
  }
);

const Emails =
  mongoose.models.Emails ||
  mongoose.model("Emails", EmailsSchema);

export default Emails;
