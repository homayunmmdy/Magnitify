import Post from "@/app/models/Post";
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