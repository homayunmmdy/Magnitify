import Comments from "../../models/Comments";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const comment = await Comments.find();

    return NextResponse.json({ comment }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const commentData = body.formData;

    await Comments.create(commentData);

    return NextResponse.json(
      { message: "نظر شما با موفقیت ارسال شد :)" },
      { status: 201 }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", error: err }, { status: 500 });
  }
}
