import { NextResponse } from "next/server";
import CashData from "../cash/CashData";

export async function handleGetRequest(Model) {
  try {
    if (process.env.NEXT_PUBLIC_STATUS == "dev") {
      return NextResponse.json({ data: CashData }, { status: 200 });
    } else {
      const data = await Model.find();
      return NextResponse.json({ data }, { status: 200 });
    }
  } catch (err) {
    console.error(err);
    return handleErrorResponse(err);
  }
}

export async function handlePostRequest(req, Model, successMessage) {
  try {
    const body = await req.json();
    const formData = body.formData;
    await Model.create(formData);
    return NextResponse.json(
      { message: successMessage || "Data created successfully" },
      { status: 201 }
    );
  } catch (err) {
    console.error(err);
    return handleErrorResponse(err);
  }
}

export function handleErrorResponse(err) {
  return NextResponse.json({ message: "Error", err }, { status: 500 });
}
