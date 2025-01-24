import { TextAdvCashType } from "@/types/CashTypes";

/**
 * @typedef {Object} TextAdvCashType
 * @property {string} _id - The unique identifier for the text advertisement.
 * @property {number} textadvid - The unique identifier for the text advertisement (numeric).
 * @property {string} advname - The name of the advertisement.
 * @property {string} body - The content of the advertisement.
 * @property {string} link - The URL link associated with the advertisement.
 * @property {string} createdAt - The timestamp when the advertisement was created.
 * @property {string} updatedAt - The timestamp when the advertisement was last updated.
 * @property {number} __v - The version key for the advertisement (used by MongoDB).
 */

/**
 * A mock array of text advertisements for development purposes.
 * This will only be used if the environment variable `NEXT_PUBLIC_STATUS` is set to "dev".
 * Otherwise, the data should be fetched from the database.
 *
 * @type {TextAdvCashType[]}
 */

const TextAdvCash: TextAdvCashType[] = [
    {
      _id: "664dab349ddca5e2184ff317",
      textadvid: 1,
      advname: "Ads One",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error ex debitis aliquam cupiditate eligendi. Beatae dignissimos esse quam voluptates odit.",
      link: "https://nexca.vercel.app/",
      createdAt: "2024-05-22T08:22:12.196Z",
      updatedAt: "2024-05-22T08:22:12.196Z",
      __v: 0,
    },
    {
      _id: "664dab45ab3af5ae5e7a3885",
      textadvid: 1,
      advname: "Ads Two",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel ratione porro reiciendis molestiae ipsa?",
      link: "https://nexca.vercel.app/",
      createdAt: "2024-05-22T08:22:29.121Z",
      updatedAt: "2024-05-22T08:22:29.121Z",
      __v: 0,
    },
    {
      _id: "664dab55ab3af5ae5e7a3888",
      textadvid: 1 ,
      advname: "Ads Three",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel ratione porro reiciendis molestiae ipsa?",
      link: "https://nexca.vercel.app/",
      createdAt: "2024-05-22T08:22:45.326Z",
      updatedAt: "2024-05-22T08:22:45.326Z",
      __v: 0,
    },
    {
      _id: "664dab55ab3af5ae5e7a3898",
      textadvid: 1 ,
      advname: "Ads Four",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel ratione porro reiciendis molestiae ipsa?",
      link: "https://nexca.vercel.app/",
      createdAt: "2024-05-22T08:22:45.326Z",
      updatedAt: "2024-05-22T08:22:45.326Z",
      __v: 0,
    },
    {
      _id: "664dab55ab4af5ae5e7a3868",
      textadvid: 1 ,
      advname: "Ads Five",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel ratione porro reiciendis molestiae ipsa?",
      link: "https://nexca.vercel.app/",
      createdAt: "2024-05-22T08:22:45.326Z",
      updatedAt: "2024-05-22T08:22:45.326Z",
      __v: 0,
    },
    {
      _id: "674dab55ab4af5ae5e7a3898",
      textadvid: 1 ,
      advname: "Ads Six",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel ratione porro reiciendis molestiae ipsa?",
      link: "https://nexca.vercel.app/",
      createdAt: "2024-05-22T08:22:45.326Z",
      updatedAt: "2024-05-22T08:22:45.326Z",
      __v: 0,
    },
    {
      _id: "664dab55ab4bf5ae5e7a3898",
      textadvid: 1 ,
      advname: "Ads Seven",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel ratione porro reiciendis molestiae ipsa?",
      link: "https://nexca.vercel.app/",
      createdAt: "2024-05-22T08:22:45.326Z",
      updatedAt: "2024-05-22T08:22:45.326Z",
      __v: 0,
    },
    {
      _id: "664dab55ab4af5ae9e7a3898",
      textadvid: 1 ,
      advname: "Ads Eight",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel ratione porro reiciendis molestiae ipsa?",
      link: "https://nexca.vercel.app/",
      createdAt: "2024-05-22T08:22:45.326Z",
      updatedAt: "2024-05-22T08:22:45.326Z",
      __v: 0,
    },
    {
      _id: "664dab55ab4cf5ae5e7a3898",
      textadvid: 1 ,
      advname: "Ads Nine",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel ratione porro reiciendis molestiae ipsa?",
      link: "https://nexca.vercel.app/",
      createdAt: "2024-05-22T08:22:45.326Z",
      updatedAt: "2024-05-22T08:22:45.326Z",
      __v: 0,
    },
    {
      _id: "664dab55ab4af5ae5e7a3898",
      textadvid: 1 ,
      advname: "Ads Ten",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel ratione porro reiciendis molestiae ipsa?",
      link: "https://nexca.vercel.app/",
      createdAt: "2024-05-22T08:22:45.326Z",
      updatedAt: "2024-05-22T08:22:45.326Z",
      __v: 0,
    },
    {
      _id: "664dab55ab4af1ae5e7a3898",
      textadvid: 2 ,
      advname: "Ads Ten",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel ratione porro reiciendis molestiae ipsa?",
      link: "https://nexca.vercel.app/",
      createdAt: "2024-05-22T08:22:45.326Z",
      updatedAt: "2024-05-22T08:22:45.326Z",
      __v: 0,
    },
    {
      _id: "664dab95ab4af5ae5e7a3898",
      textadvid: 2 ,
      advname: "Ads Ten",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel ratione porro reiciendis molestiae ipsa?",
      link: "https://nexca.vercel.app/",
      createdAt: "2024-05-22T08:22:45.326Z",
      updatedAt: "2024-05-22T08:22:45.326Z",
      __v: 0,
    },
    {
      _id: "664dab55ab4af5ae5e7a6898",
      textadvid: 2 ,
      advname: "Ads Ten",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel ratione porro reiciendis molestiae ipsa?",
      link: "https://nexca.vercel.app/",
      createdAt: "2024-05-22T08:22:45.326Z",
      updatedAt: "2024-05-22T08:22:45.326Z",
      __v: 0,
    },
    {
      _id: "664dab552b4af5ae5e7a3898",
      textadvid: 2 ,
      advname: "Ads Ten",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel ratione porro reiciendis molestiae ipsa?",
      link: "https://nexca.vercel.app/",
      createdAt: "2024-05-22T08:22:45.326Z",
      updatedAt: "2024-05-22T08:22:45.326Z",
      __v: 0,
    },
    {
      _id: "664zab55ab4af5ae5e7a3898",
      textadvid: 2 ,
      advname: "Ads Ten",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel ratione porro reiciendis molestiae ipsa?",
      link: "https://nexca.vercel.app/",
      createdAt: "2024-05-22T08:22:45.326Z",
      updatedAt: "2024-05-22T08:22:45.326Z",
      __v: 0,
    },
  ];
  
  export default TextAdvCash;
  