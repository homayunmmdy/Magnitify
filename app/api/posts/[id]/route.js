import CashData from "@/app/cash/CashData";
import Post from "@/app/models/Post";
import { handleGetSingleRequest } from "@/app/util/apiUtil";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = params;
  return handleGetSingleRequest(Post, id , CashData);

}