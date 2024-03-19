import Contacts from "../../models/Contacts";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const contact = await Contacts.find();

    return NextResponse.json({ contact }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const contactData = body.formData;

    await Contacts.create(contactData);

    return NextResponse.json(
      { message: "پیام شما با موفقیت ارسال شد" },
      { status: 201 }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", error: err }, { status: 500 });
  }
}
