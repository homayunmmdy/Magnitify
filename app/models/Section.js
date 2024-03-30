import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const sectionSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true
    },
    secid : {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const Section = mongoose.models.Section || mongoose.model("Section", sectionSchema);

export default Section;