type BaseType = {
  _id: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type PostsCashType = {
  title: string;
  imgurl: string;
  description: string;
  services: string;
  section: string;
} & BaseType;

export type ServicesCashType = {
  name: string;
  secid: number;
  description: string;
  imgurl: string;
} & Omit<BaseType, "body">;

export type SectionCashType = {
  name: string;
  secid: number;
} & Omit<BaseType, "body">;

export type ContactsCashType = {
  name: string;
  email: string;
  message: string;
} & Omit<BaseType, "body">;

export type EmailCashType = {
  email: string;
} & Omit<BaseType, "body">;

export type TicketsCashType = {
  title: string;
  description: string;
  priority: number;
  progress: number;
  status: string;
  startTime: string;
  endTime: string;
} & BaseType;

export type TextAdvCashType = {
  textadvid: number;
  advname: string;
  body: string;
  link: string;
} & BaseType;
