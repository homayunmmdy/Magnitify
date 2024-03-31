import Users from "../../models/Users";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const users = await Users.find();

    return NextResponse.json({ users }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const usersData = body.formData;

    await Users.create(usersData);

    return NextResponse.json(
      { message: "کاربر با موفقیت اضافه شد" },
      { status: 201 }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", error: err }, { status: 500 });
  }
}
