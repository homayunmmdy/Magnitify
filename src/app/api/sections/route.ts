import SectionData from "@/etc/cash/SectionData";
import { SectionModel } from "@/models";
import RequestHandler from "@/util/handler/RequestHandler";

export async function GET() {
  const handler = new RequestHandler(SectionModel, SectionData);
  return handler.GetAll();
}

//@ts-ignore
export async function POST(req) {
  const handler = new RequestHandler(SectionModel, SectionData);
  return handler.Post(req, "Section Created successfully");
}
