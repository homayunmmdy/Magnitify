import Contacts from "../../../models/Contacts";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
  try {
    const { id } = params;

    await Contacts.findByIdAndDelete(id);
    return NextResponse.json({ message: "Contacts Deleted" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
