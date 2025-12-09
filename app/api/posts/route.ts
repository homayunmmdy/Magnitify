import PostsCash from "@/app/cash/PostsCash";
import { PostModel } from "@/app/models";
import { PostsCashType } from "@/app/types/DataTypes";
import RequestHandler from "@/app/util/RequestHandler";

export async function GET(req: Request): Promise<Response> {
  const handler = new RequestHandler<PostsCashType>(PostModel, PostsCash);
  return handler.GetAll();
}

export async function POST(req: Request): Promise<Response> {
  const handler = new RequestHandler<PostsCashType>(PostModel, PostsCash);
  return handler.Post(req, "Post Created successfully");
}
