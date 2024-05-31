import { NextResponse } from "next/server";

export async function handleGetRequest(Model, cash) {
  try {
    if (process.env.NEXT_PUBLIC_STATUS == "dev") {
      return NextResponse.json({ data: cash }, { status: 200 });
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

export async function handleGetSingleRequest(Model, id, cash) {
  try {
    if (process.env.NEXT_PUBLIC_STATUS === "dev") {
      const cachedDoc = cash.find((doc) => doc._id === id);
      if (cachedDoc) {
        return NextResponse.json(cachedDoc, { status: 200 });
      }
    } else {
      const document = await Model.findOne({ _id: id });
      if (!document) {
        return NextResponse.json({ message: "Not Found" }, { status: 404 });
      }
      return NextResponse.json(document, { status: 200 });
    }
  } catch (error) {
    console.log(error);
    return handleErrorResponse(err);
  }
}

export function handleErrorResponse(err) {
  return NextResponse.json({ message: "Error", err }, { status: 500 });
}
