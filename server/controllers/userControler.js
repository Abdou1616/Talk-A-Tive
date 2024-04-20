import { User } from "../models/userModel.js";
import bcrypt from "bcryptjs";
import createToken from "../utils/createToken.js";

const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    throw new Error("please fill all the inputs ");
  }
  const userexist = await User.findOne({ email });
  if (userexist) res.status(400).send("user already exist");
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const newuser = new User({
    name,
    email,
    password: hashedPassword,
  });
  console.log(newuser);
  try {
    await newuser.save();
    createToken(res, newuser._id);
    res.status(201).json({
      _id: newuser._id,
      name: newuser.name,
      email: newuser.email,
    });
  } catch (error) {
    res.status(400);
    console.log(error.message);
    throw new Error("invalid user data");
  }
};

export { createUser };
