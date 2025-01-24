import ServicesCash from "@/cash/ServicesCash";
import { ServiceModel } from "@/models";
import RequestHandler from "@/util/handler/RequestHandler";

export async function GET() {
  const handler = new RequestHandler(ServiceModel, ServicesCash);
  return handler.GetAll();
}

export async function POST(req: Request) {
  const handler = new RequestHandler(ServiceModel, ServicesCash);
  return handler.Post(req, "Service Created successfully");
}
