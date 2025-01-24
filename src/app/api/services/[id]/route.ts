import ServicesCash from "@/cash/ServicesCash";
import { ServiceModel } from "@/models";
import RequestHandler from "@/util/handler/RequestHandler";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const handler = new RequestHandler(ServiceModel, ServicesCash);
  return handler.Get(id);
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const handler = new RequestHandler(ServiceModel, ServicesCash);
  return handler.PUT(id, req, "Service Update Successfully");
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const handler = new RequestHandler(ServiceModel, ServicesCash);
  return handler.DELETE(id, "Service Deleted successfully");
}
