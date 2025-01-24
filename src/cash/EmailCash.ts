import { EmailCashType } from "@/types/CashTypes";

/**
 * @typedef {Object} EmailCashType
 * @property {string} _id - The unique identifier for the email entry.
 * @property {string} email - The email address associated with the entry.
 * @property {string} createdAt - The timestamp when the email entry was created.
 * @property {string} updatedAt - The timestamp when the email entry was last updated.
 * @property {number} __v - The version key for the email entry (used by MongoDB).
 */

/**
 * A mock array of email entries for development purposes.
 * This will only be used if the environment variable `NEXT_PUBLIC_STATUS` is set to "dev".
 * Otherwise, the data should be fetched from the database.
 *
 * @type {EmailCashType[]}
 */

const EmailCash: EmailCashType[] = [
  {
    _id: "6641b06d0caf3407cd78b61e",
    email: "mosh@gmail.com",
    createdAt: "2024-05-13T06:17:17.580Z",
    updatedAt: "2024-05-13T06:17:17.580Z",
    __v: 0,
  },
  {
    _id: "6641b06d0caf3407cd78b621",
    email: "homayunmmdy@gmail.com",
    createdAt: "2024-05-13T06:17:17.938Z",
    updatedAt: "2024-05-13T06:17:17.938Z",
    __v: 0,
  },
  {
    _id: "664c8a98dc5217004e6d8561",
    email: "john@gmail.com",
    createdAt: "2024-05-21T11:50:48.482Z",
    updatedAt: "2024-05-21T11:50:48.482Z",
    __v: 0,
  },
];

export default EmailCash;
