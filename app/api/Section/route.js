import Section from "../../models/Section";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const sections = await Section.find();

    return NextResponse.json({ sections }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const sectionData = body.formData;

    await Section.create(sectionData);

    return NextResponse.json(
      { message: "قسمت با موفقیت ساخته شد" },
      { status: 201 }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}
