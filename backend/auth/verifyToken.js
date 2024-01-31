import jwt from "jsonwebtoken";
import Doctor from "../models/DoctorSchema.js";
import User from "../models/UserSchema.js";

export const authenticate = async (req, res, next) => {
  //Get the token from headers

  const authToken = req.headers.authorization;

  //check token is exits

  if (!authToken || !authToken.startsWith("Bearer ")) {
    return res
      .status(401)
      .json({ success: false, message: "No token, authorization is denied" });
  }

  try {
    console.log(authToken);
    next();
  } catch (err) {}
};

// 58:11 part-3
