import mongoose, { Schema } from "mongoose";
//@ts-ignore
mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const contactsSchema = new Schema(
  {
    name: String,
    email : String,
    message: String,
  },
  {
    timestamps: true,
  }
);

const Contacts = mongoose.models.Contacts || mongoose.model("Contacts", contactsSchema);

export default Contacts;