/**
 * @file API route for handling comments by ID.
 * @module /api/comments/[id]
 */
import CommentsCash from "@/cash/CommentsCash";
import { CommentsModel } from "@/models";
import RequestHandler from "@/util/handler/RequestHandler";


/**
 * Handles GET requests to fetch a comment by its ID.
 *
 * @param {Request} req - The incoming HTTP request.
 * @param {Object} params - The route parameters.
 * @param {string} params.id - The ID of the comment to fetch.
 * @returns {Promise<Response>} A response containing the comment data or an error message.
 */
export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const handler = new RequestHandler(CommentsModel, CommentsCash);
  return handler.Get(id);
}

/**
 * Handles PUT requests to update a comment by its ID.
 *
 * @param {Request} req - The incoming HTTP request containing the updated comment data.
 * @param {Object} params - The route parameters.
 * @param {string} params.id - The ID of the comment to update.
 * @returns {Promise<Response>} A response indicating success or failure of the update operation.
 */
export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const handler = new RequestHandler(CommentsModel, CommentsCash);
  return handler.PUT(id, req, "Comment Update Successfully");
}

/**
 * Handles DELETE requests to delete a comment by its ID.
 *
 * @param {Request} req - The incoming HTTP request.
 * @param {Object} params - The route parameters.
 * @param {string} params.id - The ID of the comment to delete.
 * @returns {Promise<Response>} A response indicating success or failure of the deletion operation.
 */
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const handler = new RequestHandler(CommentsModel, CommentsCash);
  return handler.DELETE(id, "Comment Deleted successfully");
}
