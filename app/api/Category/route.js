import Category from "../../models/Category";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const categories = await Category.find();

    return NextResponse.json({ categories }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}


export async function POST(req) {
  try {
    const body = await req.json();
    const { name } = body;
    const categoryData = body.formData;

    const existingCategory = await Category.findOne({ name });
    if (existingCategory) {
      return NextResponse.json({ message: "این برچسب وجود دارد" }, { status: 400 });
    }

    await Category.create(categoryData);

    return NextResponse.json({ message: "قسمت با موفقیت ساخته شد" }, { status: 201 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}