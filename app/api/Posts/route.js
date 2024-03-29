import Post from "../../models/Post";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const posts = await Post.find();

    return NextResponse.json({ posts }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const ticketData = body.formData;

    await Post.create(ticketData);

    return NextResponse.json({ message: "پست با موفقیت ساخته شد" }, { status: 201 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}