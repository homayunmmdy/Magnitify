import mongoose from "@/app/util/db";

const initModel = (name, schema) => {
  if (!mongoose.models[name]) {
    mongoose.model(name, schema);
  }
  return mongoose.models[name];
};

export default initModel;