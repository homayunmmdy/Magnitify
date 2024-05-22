import { Schema } from 'mongoose';
import baseSchema from './baseSchema';
import initModel from './initModel';

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
  baseSchema
);

const Section = initModel('Section', sectionSchema);
export default Section;