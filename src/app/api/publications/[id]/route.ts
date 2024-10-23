import PublicationsCash from "@/etc/cash/PublicationsCash";
import { PublicationsModel } from "@/models";
import RequestHandler from "@/util/handler/RequestHandler";

//@ts-ignore
export async function GET(req, { params }) {
  const { id } = params;
  const handler = new RequestHandler(PublicationsModel, PublicationsCash);
  return handler.Get(id);
}

//@ts-ignore
export async function PUT(req, { params }) {
  const { id } = params;
  const handler = new RequestHandler(PublicationsModel, PublicationsCash);
  return handler.PUT(id, req, "Section Update Successfully");
}

//@ts-ignore
export async function DELETE(req, { params }) {
  const { id } = params;
  const handler = new RequestHandler(PublicationsModel, PublicationsCash);
  return handler.DELETE(id, "Section Deleted successfully");
}
