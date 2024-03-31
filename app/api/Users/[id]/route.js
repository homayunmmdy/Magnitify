import Users from "../../../models/Users";

import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
  try {
    const { id } = params;

    await Users.findByIdAndDelete(id);
    return NextResponse.json({ message: "کاربر با موفقیت حذف شد" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
