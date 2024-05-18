import Contacts from "@/app/models/Contacts";
import { handleGetRequest, handlePostRequest } from "@/app/util/apiUtil";
import Contacts from "../../models/Contacts";

export async function GET() {
  return handleGetRequest(Contacts);
}

export async function POST(req) {
  return handlePostRequest(req, Contacts, "پیام شما با موفقیت ارسال شد" );
}