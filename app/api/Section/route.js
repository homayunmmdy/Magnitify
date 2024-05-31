import SectionData from "@/app/cash/SectionData";
import Section from "@/app/models/Section";
import { handleGetRequest } from "@/app/util/apiUtil";

export async function GET() {
  return handleGetRequest(Section , SectionData);
}