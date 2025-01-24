import PostsCash from "@/cash/PostsCash";
import { PostModel } from "@/models";
import { PostsCashType } from "@/types/CashTypes";
import RequestHandler from "@/util/handler/RequestHandler";

// Define interface for paginated response
interface PaginatedResponse<T> {
  data: T[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

export async function GET(req: Request): Promise<Response> {
  const url = new URL(req.url); // Extract URL parameters from the request
  const page = parseInt(url.searchParams.get("page") || "1", 10); // Default to page 1 if not provided
  const limit = parseInt(url.searchParams.get("limit") || "10", 10); // Default to 10 items per page
  const skip = (page - 1) * limit;

  const handler = new RequestHandler<PostsCashType>(PostModel, PostsCash);
  
  // Handle case for all posts (no pagination)
  if (!url.searchParams.has("page") || !url.searchParams.has("limit")) {
    return handler.GetAll(); // Return all posts
  }

  try {

    const { data, total } = await handler.FindPaginated(skip, limit);

    const response: PaginatedResponse<PostsCashType> = {
      data,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };

    return new Response(JSON.stringify(response), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching paginated data:", error);
    return new Response(
      JSON.stringify({ message: "Error fetching data", error }),
      { status: 500 }
    );
  }
}

export async function POST(req: Request): Promise<Response> {
  const handler = new RequestHandler<PostsCashType>(PostModel, PostsCash);
  return handler.Post(req, "Post Created successfully");
}
