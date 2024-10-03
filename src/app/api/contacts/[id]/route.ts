import ContactsData from "@/etc/cash/ContactsData";
import { ContactsModel } from "@/models";
import RequestHandler from "@/util/handler/RequestHandler";

//@ts-ignore
export async function DELETE(req, { params }) {
  const { id } = params;
  const handler = new RequestHandler(ContactsModel, ContactsData);
  return handler.DELETE(id, "Post Deleted successfully");
}
