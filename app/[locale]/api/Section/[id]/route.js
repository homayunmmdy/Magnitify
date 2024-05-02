import Section from "@/app/models/Section";

import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
  try {
    const { id } = params;

    await Section.findByIdAndDelete(id);
    return NextResponse.json({ message: "قسمت مورد نظر با موفقیت حذف شد" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}