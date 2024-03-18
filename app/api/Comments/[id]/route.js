import Comments from "../../../models/Comments";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
  try {
    const { id } = params;

    await Comments.findByIdAndDelete(id);
    return NextResponse.json({ message: "Comments Deleted" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
