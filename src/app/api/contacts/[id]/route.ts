/**
 * @file API route for handling contacts by ID.
 * @module /api/contacts/[id]
 */

import ContactsCash from "@/cash/ContactsCash";
import { ContactsModel } from "@/models";
import RequestHandler from "@/util/handler/RequestHandler";

/**
 * Handles DELETE requests to delete a contact by its ID.
 * 
 * @param {Request} req - The incoming HTTP request.
 * @param {Object} params - The route parameters.
 * @param {string} params.id - The ID of the contact to delete.
 * @returns {Promise<Response>} A response indicating success or failure of the deletion operation.
 */

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const handler = new RequestHandler(ContactsModel, ContactsCash);
  return handler.DELETE(id, "Post Deleted successfully");
}
