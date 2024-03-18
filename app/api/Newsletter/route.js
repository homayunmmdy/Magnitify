import NewsletterSubscription from "../../models/NewsletterSubscription";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const subscriptions = await NewsletterSubscription.find();

    return NextResponse.json({ subscriptions }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}


export async function POST(req) {
  try {
    const body = await req.json();
    const { email } = body;

    // Check if the email is already subscribed
    const existingSubscription = await NewsletterSubscription.findOne({ email });
    if (existingSubscription) {
      return NextResponse.json({ message: "Email is already subscribed" }, { status: 400 });
    }

    // Create new subscription
    await NewsletterSubscription.create({ email });

    return NextResponse.json({ message: "Newsletter subscription created" }, { status: 201 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}