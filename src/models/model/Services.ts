import mongoose, { Schema } from "mongoose";
import "../ConnetDB"; // Ensure the database connection is established
import { defaultSchemaOptions } from "../schemaOptions"; // Importing default schema options

const servicesSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    secid: {
      type: Number,
    },
    imgurl: String,
    description: String,
  },
  defaultSchemaOptions
);

const Services =
  mongoose.models.Services || mongoose.model("Services", servicesSchema);

export default Services;
