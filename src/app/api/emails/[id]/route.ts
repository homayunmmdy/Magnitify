import EmailData from "@/etc/cash/EmailData";
import { EmailsModel } from "@/models";
import RequestHandler from "@/util/handler/RequestHandler";

//@ts-ignore
export async function DELETE(req, { params }) {
  const { id } = params;
  const handler = new RequestHandler(EmailsModel, EmailData);
  return handler.DELETE(id, "Email Deleted successfully");
}
