import ContributionCash from "@/etc/cash/ContributionCash";
import { ContributionModel } from "@/models";
import RequestHandler from "@/util/handler/RequestHandler";

//@ts-ignore
export async function GET(req, { params }) {
  const { id } = params;
  const handler = new RequestHandler(ContributionModel, ContributionCash);
  return handler.Get(id);
}

//@ts-ignore
export async function PUT(req, { params }) {
  const { id } = params;
  const handler = new RequestHandler(ContributionModel, ContributionCash);
  return handler.PUT(id, req, "Contribue Update Successfully");
}

//@ts-ignore
export async function DELETE(req, { params }) {
  const { id } = params;
  const handler = new RequestHandler(ContributionModel, ContributionCash);
  return handler.DELETE(id, "Contribute Deleted successfully");
}
