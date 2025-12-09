type BaseType = {
   _id: string;
   body: string;
   createdAt: string;
   updatedAt: string;
   __v: number;
};

export type FieldsType = {
   key: string;
   value: string;
};

export type PostsCashType = {
   title: string;
   imgurl: string;
   fields?: FieldsType[];
} & BaseType;