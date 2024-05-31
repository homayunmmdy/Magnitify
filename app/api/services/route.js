import ServicesData from "@/app/cash/ServicesData";
import Service from "@/app/models/Services";
import { handleGetRequest } from "@/app/util/apiUtil";

export async function GET() {
  return handleGetRequest(Service , ServicesData);
}