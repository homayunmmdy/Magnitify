/**
 * @module CommentsRouter
 * @description Handles HTTP requests related to comments, including fetching all comments and adding new comments.
 */
import CommentsCash from "@/cash/CommentsCash";
import { CommentsModel } from "@/models";
import RequestHandler from "@/util/handler/RequestHandler";


/**
 * @function GET
 * @description Fetches all comments from the database or cache.
 * @returns {Promise<Response>} A promise that resolves to a response containing all comments.
 * @example
 * // Example request to fetch all comments
 * fetch('/api/comments', { method: 'GET' });
 */
export async function GET() {
  const handler = new RequestHandler(CommentsModel, CommentsCash);
  return handler.GetAll();
}

/**
 * @function POST
 * @description Adds a new comment to the database and updates the cache.
 * @param {Request} req - The request object containing the comment data to be added.
 * @returns {Promise<Response>} A promise that resolves to a response indicating success or failure.
 * @example
 * // Example request to add a new comment
 * fetch('/api/comments', {
 *   method: 'POST',
 *   headers: { 'Content-Type': 'application/json' },
 *   body: JSON.stringify({ content: 'New comment' })
 * });
 */
export async function POST(req: Request) {
  const handler = new RequestHandler(CommentsModel, CommentsCash);
  return handler.Post(req, "Comments Added successfully");
}
