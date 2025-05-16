type BaseType = {
  _id: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type CategoryType = {
  id: number;
  name: string;
};

export type PostsCashType = {
  title: string;
  imgurl?: string;
  description: string;
  services: string;
  categories?: CategoryType[];
  masterEditor?: boolean;
  source?: string;
} & BaseType;

export type ServicesCashType = {
  name: string;
  secid: number;
  description: string;
} & Omit<BaseType, "body">;

export type CommentsCashType = {
  postId: string;
  name: string;
  email: string;
  message: string;
} & Omit<BaseType, "body">;
