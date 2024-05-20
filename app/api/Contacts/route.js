import Contacts from "@/app/models/Contacts";
import { handleGetRequest, handlePostRequest } from "@/app/util/apiUtil";

export async function GET() {
  return handleGetRequest(Contacts);
}

export async function POST(req) {
  return handlePostRequest(req, Contacts, "پیام شما با موفقیت ارسال شد" );
}