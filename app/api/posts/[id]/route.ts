import PostsCash from "@/app/cash/PostsCash";
import { PostModel } from "@/app/models";
import RequestHandler from "@/app/util/RequestHandler";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const handler = new RequestHandler(PostModel, PostsCash);
  return handler.Get(id);
}

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const handler = new RequestHandler(PostModel, PostsCash);
  return handler.PUT(id, req, "Post Update Successfully");
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const handler = new RequestHandler(PostModel, PostsCash);
  return handler.DELETE(id, "Post Deleted successfully");
}
