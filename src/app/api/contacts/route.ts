import ContactsData from "@/etc/cash/ContactsData";
import { ContactsModel } from "@/models";
import RequestHandler from "@/util/handler/RequestHandler";

export async function GET() {
  const handler = new RequestHandler(ContactsModel, ContactsData);
  return handler.GetAll();
}

//@ts-ignore
export async function POST(req) {
  const handler = new RequestHandler(ContactsModel, ContactsData);
  return handler.Post(req, "Message Send successfully");
}
