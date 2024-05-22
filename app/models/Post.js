import { Schema } from 'mongoose';
import baseSchema from './baseSchema';
import initModel from './initModel';

const postSchema = new Schema(
  {
    title: String,
    imgurl: String,
    description: String,
    section: String,
    body: String,
  },
  baseSchema
);

const Post = initModel('Post', postSchema);
export default Post;