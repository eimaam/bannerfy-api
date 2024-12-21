import mongoose, { ClientSession } from "mongoose";

import crypto from "crypto";
import { TokenType } from "../types/types";
import VerificationTokenModel from "../models/VerificationToken";

class TokenService {
  /**
   * Generates a unique verification token and saves it to the database then returns the token
   * @param userId The user ID for which the token is being generated for
   * @param session The Mongoose client session
   * @returns The generated token
   */
  static async generateAndSaveVerificationToken(
    userId: mongoose.ObjectId,
    session?: ClientSession
  ) {
    const mongoSession = session ?? null;
    let token: string | null = null;
    let isUnique = false;

    while (!isUnique) {
      token = crypto.randomBytes(32).toString("hex");
      const existingToken = await VerificationTokenModel.findOne({
        token,
      }).session(mongoSession);

      if (!existingToken) {
        isUnique = true;
      }
    }

    if (!token) {
      throw new Error("Failed to generate verification token");
    }

    const verificationToken = await VerificationTokenModel.create(
      [
        {
          userId,
          token,
          type: TokenType.EMAIL_VERIFICATION,
        },
      ],
      { session: mongoSession }
    );

    if (!verificationToken) {
      throw new Error("Failed to generate verification token");
    }

    return token;
  }

  static async generateRandomToken() {
    return crypto.randomBytes(32).toString("hex");
  }

  static async findToken(token: string, session?: ClientSession) {
    const mongoSession = session ?? null;
    return await VerificationTokenModel.findOne({
      token,
    }).session(mongoSession);
  }

  static async deleteToken(token: string, session?: ClientSession) {
    const mongoSession = session ?? null;
    return await VerificationTokenModel.deleteOne({
      token,
    }).session(mongoSession);
  }

}

export default TokenService;
