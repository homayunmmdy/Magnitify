import User from "../../models/User";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const categories = await User.find();

    return NextResponse.json({ categories }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const categoryData = body.formData;

    await User.create(categoryData);

    return NextResponse.json({ message: "Category Created" }, { status: 201 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}
