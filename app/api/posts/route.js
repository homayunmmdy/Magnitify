import CashData from "@/app/cash/CashData";
import { PostModel } from "@/app/models";
import { handleGetRequest } from "@/app/util/apiUtil";

export async function GET() {
  return handleGetRequest(PostModel, CashData);
}