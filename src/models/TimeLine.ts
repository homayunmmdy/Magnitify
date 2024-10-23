import mongoose, { Schema } from "mongoose";
//@ts-ignore
mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const TimeLineSchema = new Schema(
  {
    title: String,
    date: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

const TimeLine = mongoose.models.TimeLine || mongoose.model("TimeLine", TimeLineSchema);

export default TimeLine;
