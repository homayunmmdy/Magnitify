import { NextResponse } from "next/server";

export async function handleGetRequest(Model) {
  try {
    const data = await Model.find();
    return NextResponse.json({ data }, { status: 200 });
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