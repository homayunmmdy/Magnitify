import mongoose from "mongoose";

/**
 * The MongoDB connection URI retrieved from the environment variables.
 * @type {string}
 */

/**
 * Connects to the MongoDB database using the provided URI.
 * Also sets Mongoose's Promise implementation to use the global Promise object.
 * @throws {Error} If the connection to the database fails.
 */
mongoose.connect(process.env.MONGODB_URI as string);
mongoose.Promise = global.Promise;