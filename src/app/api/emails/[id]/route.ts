import EmailCash from "@/cash/EmailCash";
import { EmailsModel } from "@/models";
import RequestHandler from "@/util/handler/RequestHandler";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const handler = new RequestHandler(EmailsModel, EmailCash);
  return handler.DELETE(id, "Email Deleted successfully");
}
