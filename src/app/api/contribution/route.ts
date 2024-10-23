import ContributionCash from "@/etc/cash/ContributionCash";
import { ContributionModel } from "@/models";
import RequestHandler from "@/util/handler/RequestHandler";

export async function GET() {
  const handler = new RequestHandler(ContributionModel, ContributionCash);
  return handler.GetAll();
}

//@ts-ignore
export async function POST(req) {
  const handler = new RequestHandler(ContributionModel, ContributionCash);
  return handler.Post(req, "Your Contribution added successfully");
}
