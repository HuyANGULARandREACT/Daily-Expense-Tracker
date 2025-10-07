import jwt from "jsonwebtoken";
import config from "../configs/config";
import { IUser } from "../modules/users/models/user.model";

const generateToken = (user: IUser) => {
  return jwt.sign(
    { userId: user._id, userame: user.username },
    config.JWT_SECRET,
    {
      expiresIn: "1h",
    }
  );
};

export default generateToken;
