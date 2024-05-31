import Post from "@/app/models/Post";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = params;

  const foundTicket = await Post.findOne({ _id: id });
  return NextResponse.json({ foundTicket }, { status: 200 });
}