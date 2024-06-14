import { Schema } from "mongoose";
import initModel from "../initModel";
import baseSchema from "../baseSchema";

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
