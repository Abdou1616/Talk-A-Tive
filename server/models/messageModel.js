import mongoose from "mongoose";

const Messageschema = mongoose.Schema({
  sender: { type: String, require: true, ref: "User" },
  content: { type: String, require: true },
  chat: { type: String, require: true, ref: "Chat" },
},
  {
    timestamps: true,
  });
export const Message = mongoose.model("Message", Messageschema);
