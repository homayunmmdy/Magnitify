import EmailData from "@/app/cash/EmailData";
import { EmailsModel } from "@/app/models";
import { handleGetRequest, handlePostRequest } from "@/app/util/apiUtil";

export async function GET() {
  return handleGetRequest(EmailsModel, EmailData);
}

export async function POST(req) {
  return handlePostRequest(req, EmailsModel, "Email Send successfully");
}
