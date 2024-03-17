import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const contactsSchema = new Schema(
  {
    title: String,
    content: String,
  },
  {
    timestamps: true,
  }
);

const Contacts = mongoose.models.Contacts || mongoose.model("Contacts", contactsSchema);

export default Contacts;