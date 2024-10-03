import { NextResponse } from "next/server";

class RequestHandler {
  //@ts-ignore
  constructor(Model, Cache) {
    //@ts-ignore
    this.Model = Model;
    //@ts-ignore
    this.Cache = Cache;
  }

  async GetAll() {
    try {
      if (process.env.NEXT_PUBLIC_STATUS == "dev") {
        //@ts-ignore
        return NextResponse.json({ data: this.Cache }, { status: 200 });
      } else {
        //@ts-ignore
        const data = await this.Model.find();
        return NextResponse.json({ data }, { status: 200 });
      }
    } catch (error) {
      console.error(error);
      return this.ErrorResponse(error);
    }
  }
  //@ts-ignore
  async Post(req, successMessage) {
    try {
      const body = await req.json();
      const formData = body.formData;
      //@ts-ignore
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
  //@ts-ignore
  async Get(id) {
    try {
      if (process.env.NEXT_PUBLIC_STATUS === "dev") {
        //@ts-ignore
        const document = this.Cache.find((doc) => doc._id === id);
        if (document) {
          return NextResponse.json({ document }, { status: 200 });
        }
      } else {
        //@ts-ignore
        const document = await this.Model.findOne({ _id: id });
        if (!document) {
          return NextResponse.json({ message: "Not Found" }, { status: 404 });
        }
        return NextResponse.json({ document }, { status: 200 });
      }
    } catch (error) {
      console.error(error);
      return this.ErrorResponse(error);
    }
  }

  //@ts-ignore
  async PUT(id, req, successMessage) {
    try {
      const body = await req.json();
      const Data = body.formData;

      //@ts-ignore
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

  //@ts-ignore
  async DELETE(id, successMessage) {
    try {
      //@ts-ignore
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
  //@ts-ignore
  ErrorResponse(err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}

export default RequestHandler;
