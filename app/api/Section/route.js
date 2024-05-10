import Section from "@/app/models/Section";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const sections = await Section.find();

    return NextResponse.json({ sections }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}