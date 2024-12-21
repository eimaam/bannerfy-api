import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import { sendErrorResponse } from "../../utils/api-response";

export const handleValidationErrors = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    sendErrorResponse(
      res,
      400,
      "Validation failed",
      errors.array().map((error) => ({
        path: (error as any)?.path,
        message: error?.msg,
      }))
    );
    return;
  }
  next();
};
