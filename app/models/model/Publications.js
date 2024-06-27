import { Schema } from "mongoose";
import baseSchema from "../baseSchema";
import initModel from "../initModel";

const publicationSchema = new Schema(
  {
    title: String,
    imgurl: String,
    description: String,
    lang: String,
    author: String,
    body: String,
    relaseTime: Date,
  },
  baseSchema
);

const Publication = initModel("Publication", publicationSchema);
export default Publication;