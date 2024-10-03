import PostsCash from "@/etc/cash/PostsCash";
import { PostModel } from "@/models";
import RequestHandler from "@/util/handler/RequestHandler";

export async function GET() {
  const handler = new RequestHandler(PostModel, PostsCash);
  return handler.GetAll();
}

//@ts-ignore
export async function POST(req) {
  const handler = new RequestHandler(PostModel, PostsCash);
  return handler.Post(req, "Post Created successfully");
}
