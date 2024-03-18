import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const newsletterSubscriptionSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
  },
  {
    timestamps: true,
  }
);

const NewsletterSubscription = mongoose.models.NewsletterSubscription || mongoose.model("NewsletterSubscription", newsletterSubscriptionSchema);

export default NewsletterSubscription;