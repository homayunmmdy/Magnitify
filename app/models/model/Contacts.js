import { Schema } from 'mongoose';
import baseSchema from '../baseSchema';
import initModel from '../initModel';

const contactsSchema = new Schema(
  {
    name: String,
    email : String,
    message: String,
  },
  baseSchema
);

const Contacts = initModel('Contacts', contactsSchema);
export default Contacts;