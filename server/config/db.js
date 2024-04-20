import mongoose from "mongoose";

export const connectdb = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/Talkative");
    console.log("connected succesfully to db");
  } catch (error) {
    console.log(error.message);
  }
};
