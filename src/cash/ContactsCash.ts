import { ContactsCashType } from "@/types/CashTypes";

/**
 * @typedef {Object} Contact
 * @property {string} _id - The unique identifier for the contact message.
 * @property {string} name - The name of the person sending the message.
 * @property {string} email - The email of the person sending the message.
 * @property {string} message - The content of the message.
 * @property {string} createdAt - The timestamp when the message was created.
 * @property {string} updatedAt - The timestamp when the message was last updated.
 * @property {number} __v - The version key for the message (used by MongoDB).
 */

/**
 * A mock array of contact messages for development purposes.
 * This will only be used if the environment variable `NEXT_PUBLIC_STATUS` is set to "dev".
 * Otherwise, the data should be fetched from the database.
 *
 * @type {Contact[]}
 */

const ContactsCash: ContactsCashType[] = [
  {
    _id: "6641b06d0caf3407cd78b61e",
    name: "Homayoun",
    email: "homayunmmdy@gmail.com",
    message:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab magni possimus debitis necessitatibus",
    createdAt: "2024-05-13T06:17:17.580Z",
    updatedAt: "2024-05-13T06:17:17.580Z",
    __v: 0,
  },
  {
    _id: "6641b06d0caf3407cd78b621",
    name: "Alex",
    email: "Alex@gmail.com",
    message:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab magni possimus debitis necessitatibus",
    createdAt: "2024-05-13T06:17:17.938Z",
    updatedAt: "2024-05-13T06:17:17.938Z",
    __v: 0,
  },
  {
    _id: "664c8a98dc5217004e6d8561",
    name: "Mickle",
    email: "Mickle@gmail.com",
    message:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab magni possimus debitis necessitatibus",
    createdAt: "2024-05-21T11:50:48.482Z",
    updatedAt: "2024-05-21T11:50:48.482Z",
    __v: 0,
  },
];

export default ContactsCash;
