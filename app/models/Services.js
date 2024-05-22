import { Schema } from "mongoose";
import baseSchema from "./baseSchema";
import initModel from "./initModel";

const serviceSchema = new Schema(
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
  baseSchema
);

const Service = initModel("Service", serviceSchema);
export default Service;
