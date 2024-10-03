import SectionData from "@/etc/cash/SectionData";
import { SectionModel } from "@/models";
import RequestHandler from "@/util/handler/RequestHandler";

//@ts-ignore
export async function GET(req, { params }) {
  const { id } = params;
  const handler = new RequestHandler(SectionModel, SectionData);
  return handler.Get(id);
}

//@ts-ignore
export async function PUT(req, { params }) {
  const { id } = params;
  const handler = new RequestHandler(SectionModel, SectionData);
  return handler.PUT(id, req, "Section Update Successfully");
}

//@ts-ignore
export async function DELETE(req, { params }) {
  const { id } = params;
  const handler = new RequestHandler(SectionModel, SectionData);
  return handler.DELETE(id, "Section Deleted successfully");
}
