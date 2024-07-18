import { EmailsModel } from "@/app/models";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
  try {
    const { id } = params;

    await EmailsModel.findByIdAndDelete(id);
    return NextResponse.json({ message: "Email is Deleted" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
