import Post from "@/app/models/Post";
import { handleGetRequest } from "@/app/util/apiUtil";
import CashData from "@/app/cash/CashData";

export async function GET() {
  return handleGetRequest(Post, CashData);
}