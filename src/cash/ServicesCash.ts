import { ServicesCashType } from "@/types/CashTypes";

/**
 * @typedef {Object} ServicesCashType
 * @property {string} _id - The unique identifier for the service.
 * @property {string} name - The name of the service.
 * @property {number} secid - The unique identifier for the section associated with the service (numeric).
 * @property {string} imgurl - The URL of the image associated with the service.
 * @property {string} description - A detailed description of the service.
 * @property {string} createdAt - The timestamp when the service was created.
 * @property {string} updatedAt - The timestamp when the service was last updated.
 * @property {number} __v - The version key for the service (used by MongoDB).
 */

/**
 * A mock array of services for development purposes.
 * This will only be used if the environment variable `NEXT_PUBLIC_STATUS` is set to "dev".
 * Otherwise, the data should be fetched from the database.
 *
 * @type {ServicesCashType[]}
 */

const ServicesCash: ServicesCashType[] = [
  {
    _id: "664dab349ddca5e2184ff317",
    name: "Home",
    secid: 1,
    imgurl: "",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, nam aspernatur tenetur dolorum doloremque cumque ullam culpa quidem voluptates pariatur repellendus repudiandae fugit, aliquam temporibus velit quam, itaque magni deserunt. Iste est amet excepturi laboriosam. Minima nihil doloribus atque laboriosam laudantium odio facilis commodi impedit dolorum iusto. Quaerat itaque esse laudantium repellendus iure ipsam similique quae corrupti cumque harum, ratione illo dicta soluta maxime, officiis repudiandae mollitia dolore, quidem quibusdam. Explicabo voluptatibus sunt nemo! Cumque sint ea earum molestias! Doloremque.",
    createdAt: "2024-05-22T08:22:12.196Z",
    updatedAt: "2024-05-22T08:22:12.196Z",
    __v: 0,
  },
  {
    _id: "664dab45ab3af5ae5e7a3885",
    name: "Sport",
    secid: 2,
    imgurl:
      "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, nam aspernatur tenetur dolorum doloremque cumque ullam culpa quidem voluptates pariatur repellendus repudiandae fugit, aliquam temporibus velit quam, itaque magni deserunt. Iste est amet excepturi laboriosam. Minima nihil doloribus atque laboriosam laudantium odio facilis commodi impedit dolorum iusto. Quaerat itaque esse laudantium repellendus iure ipsam similique quae corrupti cumque harum, ratione illo dicta soluta maxime, officiis repudiandae mollitia dolore, quidem quibusdam. Explicabo voluptatibus sunt nemo! Cumque sint ea earum molestias! Doloremque.",
    createdAt: "2024-05-22T08:22:29.121Z",
    updatedAt: "2024-05-22T08:22:29.121Z",
    __v: 0,
  },
  {
    _id: "664dab55ab3af5ae5e7a3888",
    name: "Business",
    secid: 3,
    imgurl:
      "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, nam aspernatur tenetur dolorum doloremque cumque ullam culpa quidem voluptates pariatur repellendus repudiandae fugit, aliquam temporibus velit quam, itaque magni deserunt. Iste est amet excepturi laboriosam. Minima nihil doloribus atque laboriosam laudantium odio facilis commodi impedit dolorum iusto. Quaerat itaque esse laudantium repellendus iure ipsam similique quae corrupti cumque harum, ratione illo dicta soluta maxime, officiis repudiandae mollitia dolore, quidem quibusdam. Explicabo voluptatibus sunt nemo! Cumque sint ea earum molestias! Doloremque.",
    createdAt: "2024-05-22T08:22:45.326Z",
    updatedAt: "2024-05-22T08:22:45.326Z",
    __v: 0,
  },
];

export default ServicesCash;
