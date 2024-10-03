import EmailData from "@/etc/cash/EmailData";
import { EmailsModel } from "@/models";
import RequestHandler from "@/util/handler/RequestHandler";

export async function GET() {
  const handler = new RequestHandler(EmailsModel, EmailData);
  return handler.GetAll();
}

//@ts-ignore
export async function POST(req) {
  const handler = new RequestHandler(EmailsModel, EmailData);
  return handler.Post(req, "Email Send successfully");
}
