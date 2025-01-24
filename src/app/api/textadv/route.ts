import TextAdvCash from "@/cash/TextAdvCash";
import { TextAdvModel } from "@/models";
import RequestHandler from "@/util/handler/RequestHandler";

export async function GET() {
  const handler = new RequestHandler(TextAdvModel, TextAdvCash);
  return handler.GetAll();
}

export async function POST(req: Request) {
  const handler = new RequestHandler(TextAdvModel, TextAdvCash);
  return handler.Post(req, "ads Created successfully");
}
