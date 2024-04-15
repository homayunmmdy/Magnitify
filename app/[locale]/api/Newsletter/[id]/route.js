import NewsletterSubscription from "../../../models/NewsletterSubscription";

import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
  try {
    const { id } = params;

    await NewsletterSubscription.findByIdAndDelete(id);
    return NextResponse.json({ message: "Newsletter Deleted" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
