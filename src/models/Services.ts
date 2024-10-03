import mongoose, { Schema } from "mongoose";
//@ts-ignore
mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

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
    imgurl : String,
    description: String,
  },
  {
    timestamps: true,
  }
);

const Services = mongoose.models.Services || mongoose.model("Services", servicesSchema);

export default Services;