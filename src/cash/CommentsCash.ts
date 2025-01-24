import { CommentsCashType } from "@/types/CashTypes";

/**
 * @typedef {Object} Comment
 * @property {string} _id - The unique identifier for the comment.
 * @property {string} postId - The unique identifier of the post this comment belongs to.
 * @property {string} name - The name of the commenter.
 * @property {string} email - The email of the commenter.
 * @property {string} message - The content of the comment.
 * @property {string} createdAt - The timestamp when the comment was created.
 * @property {string} updatedAt - The timestamp when the comment was last updated.
 * @property {number} __v - The version key for the comment (used by MongoDB).
 */

/**
 * A mock array of comments for development purposes.
 * This will only be used if the environment variable `NEXT_PUBLIC_STATUS` is set to "dev".
 * Otherwise, the data should be fetched from the database.
 *
 * @type {Comment[]}
 */

const CommentsCash: CommentsCashType[] = [
  {
    _id: "6641b06d0caf3407cd78b61e",
    postId: "6621b06d0caf3407cd78b61e",
    name: "mohs",
    email: "mosh@gmail.com",
    message: "Hello I am mosh",
    createdAt: "2024-05-13T06:17:17.580Z",
    updatedAt: "2024-05-13T06:17:17.580Z",
    __v: 0,
  },
  {
    _id: "6641b06d0caf3407cd78b621",
    postId: "66a1b06d0caf3407cd78b621",
    name: "homayounmmdy",
    email: "homayunmmdy@gmail.com",
    message: "great article",
    createdAt: "2024-05-13T06:17:17.938Z",
    updatedAt: "2024-05-13T06:17:17.938Z",
    __v: 0,
  },
  {
    _id: "664db351373934f6308928dd",
    postId: "664db351373934f6a08928dd",
    name: "john",
    email: "john@gmail.com",
    message: "Thanks",
    createdAt: "2024-05-21T11:50:48.482Z",
    updatedAt: "2024-05-21T11:50:48.482Z",
    __v: 0,
  },
  {
    _id: "664db351373931f6308928dd",
    postId: "664db351373934f6a08928dd",
    name: "max",
    email: "max@gmail.com",
    message:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab magni possimus debitis necessitatibus repellat voluptate",
    createdAt: "2024-05-21T11:50:48.482Z",
    updatedAt: "2024-05-21T11:50:48.482Z",
    __v: 0,
  },
];

export default CommentsCash;
