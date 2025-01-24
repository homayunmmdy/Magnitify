import mongoose, { Schema } from "mongoose";
import "../ConnetDB"; // Ensure the database connection is established
import { defaultSchemaOptions } from "../schemaOptions"; // Importing default schema options

const contactsSchema = new Schema(
  {
    name: String,
    email: String,
    message: String,
  },
  defaultSchemaOptions
);

const Contacts =
  mongoose.models.Contacts || mongoose.model("Contacts", contactsSchema);

export default Contacts;
