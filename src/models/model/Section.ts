import mongoose, { Schema } from "mongoose";
import "../ConnetDB"; // Ensure the database connection is established
import { defaultSchemaOptions } from "../schemaOptions"; // Importing default schema options

const sectionSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    secid: {
      type: Number,
    },
  },
  defaultSchemaOptions
);

const Section =
  mongoose.models.Section || mongoose.model("Section", sectionSchema);

export default Section;
