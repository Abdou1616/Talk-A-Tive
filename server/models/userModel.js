import mongoose from "mongoose";

const userschema = mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  picture: {
    type: String,
    require: true,
    default:
      "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
  },
  isAdmin: { type: Boolean, default: false },
});
export const User = mongoose.model("User", userschema);
