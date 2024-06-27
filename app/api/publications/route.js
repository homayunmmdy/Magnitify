import { handleGetRequest, handlePostRequest } from "@/app/util/apiUtil";
import { PublicationModel } from "@/app/models";
import PublicationData from "@/app/cash/PublicationData";

export async function GET() {
  return handleGetRequest(PublicationModel, PublicationData);
}
export async function POST(req) {
  return handlePostRequest(req, PublicationModel, "Publication Created successfully");
}
