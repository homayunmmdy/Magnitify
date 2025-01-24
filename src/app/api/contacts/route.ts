/**
 * @module ContactsRouter
 * @description Handles HTTP requests related to contacts, including fetching all contact messages and sending new messages.
 */
import ContactsCash from "@/cash/ContactsCash";
import { ContactsModel } from "@/models";
import RequestHandler from "@/util/handler/RequestHandler";


/**
 * @function GET
 * @description Fetches all contact messages from the database or cache.
 * @returns {Promise<Response>} A promise that resolves to a response containing all contact messages.
 * @example
 * // Example request to fetch all contact messages
 * fetch('/api/contacts', { method: 'GET' });
 */

export async function GET() {
  const handler = new RequestHandler(ContactsModel, ContactsCash);
  return handler.GetAll();
}

/**
 * @function POST
 * @description Sends a new contact message and stores it in the database.
 * @param {Request} req - The request object containing the contact message data to be sent.
 * @returns {Promise<Response>} A promise that resolves to a response indicating success or failure.
 * @example
 * // Example request to send a new contact message
 * fetch('/api/contacts', {
 *   method: 'POST',
 *   headers: { 'Content-Type: 'application/json' },
 *   body: JSON.stringify({ name: 'John Doe', email: 'john@example.com', message: 'Hello!' })
 * });
 */

export async function POST(req: Request) {
  const handler = new RequestHandler(ContactsModel, ContactsCash);
  return handler.Post(req, "Message Send successfully");
}
