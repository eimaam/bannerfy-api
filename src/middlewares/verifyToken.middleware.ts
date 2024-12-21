import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

// Define a custom type for the Request object
interface CustomRequest extends Request {
  userId?: string;
}

export const verifyToken = (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  const token: string | undefined = authHeader?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ success: false, message: "Access denied" });
  }

  try {
    const SECRET_KEY = process.env.JWT_SECRET as string;

    const decodedToken = jwt.verify(token, SECRET_KEY) as { userId: string };

    req.userId = decodedToken.userId; // Add userId directly to the request object

    next();
  } catch (error) {
    return res
      .status(401)
      .json({ success: false, message: "Invalid or expired token", error });
  }
};
