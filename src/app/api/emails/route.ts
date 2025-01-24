import EmailCash from "@/cash/EmailCash";
import { EmailsModel } from "@/models";
import RequestHandler from "@/util/handler/RequestHandler";

export async function GET() {
  const handler = new RequestHandler(EmailsModel, EmailCash);
  return handler.GetAll();
}

export async function POST(req: Request) {
  const handler = new RequestHandler(EmailsModel, EmailCash);
  return handler.Post(req, "Email Send successfully");
}
