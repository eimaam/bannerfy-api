import { Request, Response } from "express";
import { logError } from "../utils/utils";
import {
  sendErrorResponse,
  sendSuccessResponse,
  throwErrorResponse,
} from "../utils/api-response";
import { UserService } from "../service/user.service";
import bcrypt from "bcrypt";
import envConfig from "../config/env.config";
import mongoTransaction from "../utils/mongoTransaction";
import { IUser } from "../models/User";
import { StatusCodes } from "../types/enum";

export class Users {
  static async signUp(req: Request, res: Response) {
    const { fullName, email, password, occupation, industry, bio } = req.body;

    try {
      const result = await mongoTransaction(async (session) => {
        const isExistingUser = await UserService.checkUserExists(email);
        if (isExistingUser) {
          throwErrorResponse(400, "Account with this email already exists");
        }

        const hashedPassword = await bcrypt.hash(
          password,
          envConfig.SALT_ROUNDS
        );

        const userData = {
          fullName,
          email,
          password: hashedPassword,
          occupation,
          industry,
          bio,
        };

        const newUser = await UserService.createUser(
          userData as IUser,
          session
        );

        if (!newUser) {
          throwErrorResponse(StatusCodes.BAD_REQUEST, "Error creating user");
        }

        return newUser;
      });

      sendSuccessResponse(
        res,
        StatusCodes.CREATED,
        "Sign up successful",
        result
      );
    } catch (error: any) {
      logError("Error creating user", error);
      sendErrorResponse(res, 500, "Error creating user", error);
    }
  }

  static async signIn(req: Request, res: Response) {
    const { email, password } = req.body;

    try {
      const user = await UserService.signInWithEmailPassword(email, password);

      if (!user) {
        sendErrorResponse(res, 400, "Invalid email or password");
        return;
      }

      sendSuccessResponse(res, 200, "Sign in successful", user);
    } catch (error: any) {
      logError("Error signing in", error);
      sendErrorResponse(res, 500, "Error signing in", error);
    }
  }
}
