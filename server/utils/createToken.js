import jwt from "jsonwebtoken";

const createToken = (res, userId) => {
  const Token = jwt.sign({ userId }, "abcd", { expiresIn: "30d" });
  res.cookie("jwt", Token, {
    httpOnly: true,
    maxAge: 30 * 24,
  });
  return Token;
};

export default createToken;
