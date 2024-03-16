import About from "../../models/About";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const about = await About.find();

    return NextResponse.json({ about }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const aboutData = body.formData;

    await About.create(aboutData);

    return NextResponse.json(
      { message: "About Data Created" },
      { status: 201 }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", error: err }, { status: 500 });
  }
}
