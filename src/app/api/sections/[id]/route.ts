import SectionCash from "@/cash/SectionCash";
import { SectionModel } from "@/models";
import RequestHandler from "@/util/handler/RequestHandler";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const handler = new RequestHandler(SectionModel, SectionCash);
  return handler.Get(id);
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const handler = new RequestHandler(SectionModel, SectionCash);
  return handler.PUT(id, req, "Section Update Successfully");
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const handler = new RequestHandler(SectionModel, SectionCash);
  return handler.DELETE(id, "Section Deleted successfully");
}
