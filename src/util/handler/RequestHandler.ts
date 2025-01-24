/**
 * @class RequestHandler
 * @description A class that handles all the server side CRUD operations
 * @template T
 * @param {Model<T>} Model - The mongoose model
 * @param {T[]} Cache - The cache array
 * @example
 * const requestHandler = new RequestHandler(UserModel, UserCache);
 */
import { Model } from "mongoose";
import { NextResponse } from "next/server";

/**
 * @class RequestHandler
 * @description A class that handles all the server side CRUD operations
 * @template T
 * @property {Model<T>} Model - The mongoose model
 * @property {T[]} Cache - The cache array
 */
class RequestHandler<
  T extends {
    _id: string;
    createdAt: string;
  }
> {
  private Model: Model<T>;
  private Cache: T[];

  /**
   * @constructor
   * @param {Model<T>} Model - The mongoose model
   * @param {T[]} Cache - The cache array
   */
  constructor(Model: Model<T>, Cache: T[]) {
    this.Model = Model;
    this.Cache = Cache;
  }

    /**
   * @function FindPaginated
   * @description Retrieve paginated data from the database or cache
   * @param {number} skip - The number of documents to skip
   * @param {number} limit - The number of documents to retrieve
   * @returns {Promise<{ data: T[], total: number }>} - The paginated data and total count
   */
    async FindPaginated(skip: number, limit: number) {
      try {
        console.log(`Fetching paginated data - skip: ${skip}, limit: ${limit}`);
        if (process.env.NEXT_PUBLIC_STATUS === "dev") {
          // In dev mode, simulate pagination using the cache
          const total = this.Cache.length;
          
           // Add sorting by createdAt in descending order
          const data = this.Cache
          .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()) // Sort descending
          .slice(skip, skip + limit);

          return { data, total };
        } else {
          // In production, use the database
          const data = await this.Model.find()
          .sort({ createdAt: -1 }) // Sort by createdAt in descending order
          .skip(skip)
          .limit(limit)
          .exec();

          const total = await this.Model.countDocuments();
          return { data, total };
        }
      } catch (error) {
        console.error(error);
        throw new Error("Error fetching paginated data");
      }
    }
  

  /**
   * @function GetAll
   * @description Get all the data from the database
   * @returns {NextResponse} - The response with the data or error
   */
  async GetAll() {
    try {
      if (process.env.NEXT_PUBLIC_STATUS === "dev") {
        return NextResponse.json<T[]>({ data: this.Cache } as any, {
          status: 200,
        });
      } else {
        const data = await this.Model.find();
        return NextResponse.json<T[]>({ data } as any, { status: 200 });
      }
    } catch (error) {
      console.error(error);
      return this.ErrorResponse(error);
    }
  }
  /**
   * @function Post
   * @description Create a new data in the database
   * @param {Request} req - The request object
   * @param {string} successMessage - The success message to return
   * @returns {NextResponse} - The response with the data or error
   */
  async Post(req: Request, successMessage: string) {
    try {
      const body = await req.json();
      const formData = body.formData as T;
      await this.Model.create(formData);
      return NextResponse.json(
        { message: successMessage || "Data created successfully" },
        { status: 201 }
      );
    } catch (error) {
      console.error(error);
      return this.ErrorResponse(error);
    }
  }
  /**
   * @function Get
   * @description Get a single data from the database
   * @param {string} id - The id of the data
   * @returns {NextResponse} - The response with the data or error
   */
  async Get(id: string) {
    try {
      if (process.env.NEXT_PUBLIC_STATUS === "dev") {
        const document = this.Cache.find((doc) => doc._id === id);
        if (document) {
          return NextResponse.json<T>({ document } as any, { status: 200 });
        }
      } else {
        const document = await this.Model.findOne({ _id: id });
        if (!document) {
          return NextResponse.json({ message: "Not Found" }, { status: 404 });
        }
        return NextResponse.json<T>({ document } as any, { status: 200 });
      }
    } catch (error) {
      console.error(error);
      return this.ErrorResponse(error);
    }
  }

  /**
   * @function PUT
   * @description Update a single data in the database
   * @param {string} id - The id of the data
   * @param {Request} req - The request object
   * @param {string} successMessage - The success message to return
   * @returns {NextResponse} - The response with the data or error
   */
  async PUT(id: string, req: Request, successMessage: string) {
    try {
      const body = await req.json();
      const Data = body.formData as T;

      const updateData = await this.Model.findByIdAndUpdate(id, {
        ...Data,
      });

      return NextResponse.json(
        { message: successMessage || "Data Update Successfully" },
        { status: 200 }
      );
    } catch (error) {
      console.error(error);
      return NextResponse.json({ message: "Error", error }, { status: 500 });
    }
  }

  /**
   * @function DELETE
   * @description Delete a single data from the database
   * @param {string} id - The id of the data
   * @param {string} successMessage - The success message to return
   * @returns {NextResponse} - The response with the data or error
   */
  async DELETE(id: string, successMessage: string) {
    try {
      const deleteDocument = await this.Model.findByIdAndDelete(id);
      if (!deleteDocument) {
        return NextResponse.json({ message: "Not Found" }, { status: 404 });
      }
      return NextResponse.json(
        { message: successMessage || "Data Delete Successfully" },
        { status: 200 }
      );
    } catch (error) {
      console.error(error);
      return this.ErrorResponse(error);
    }
  }

  /**
   * @function ErrorResponse
   * @description A utility function to return an error response
   * @param {Error} err - The error object
   * @returns {NextResponse} - The response with the error
   */
  ErrorResponse(err: any) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}

export default RequestHandler;


