import mongoose from "mongoose";

const chatschema = mongoose.Schema(
  {
    chatName: { type: String },
    isGroup: { type: Boolean, default: false },
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  {
    timestamps: true,
  }
);
export const chat = mongoose.model("Chat", chatschema);
