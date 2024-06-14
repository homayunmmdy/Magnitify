import ContactsData from "@/app/cash/ContactsData";
import { ContactsModel } from "@/app/models";
import { handleGetRequest, handlePostRequest } from "@/app/util/apiUtil";

export async function GET() {
  return handleGetRequest(ContactsModel, ContactsData);
}

export async function POST(req) {
  return handlePostRequest(req, ContactsModel, "Message Send successfully");
}
