import CashData from "@/app/cash/CashData";
import { PostModel } from "@/app/models";
import { handleGetSingleRequest } from "@/app/util/apiUtil";

export async function GET(request, { params }) {
  const { id } = params;
  return handleGetSingleRequest(PostModel, id , CashData);

}