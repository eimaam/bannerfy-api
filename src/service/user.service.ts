import { ClientSession } from "mongoose";
import { IUser, UserModel } from "../models/User";
import EmailService from "./email.service";
import TokenService from "./token.service";
import { compare } from "bcrypt";
import envConfig from "../config/env.config";
import jwt from "jsonwebtoken";

export class UserService {
  static async createUser(userData: IUser, session?: ClientSession) {
    const mongoSession = session ?? null;

    const { fullName, email, password, occupation, industry, bio } = userData;

    const newUserData = {
      fullName,
      email,
      password,
      occupation,
      industry,
      bio,
    };

    const [newUser] = await UserModel.create([newUserData], {
      session: mongoSession,
    });

    const verificationToken =
      await TokenService.generateAndSaveVerificationToken(
        newUser?._id,
        mongoSession as ClientSession
      );

    await EmailService.sendOnboardingEmail(email, fullName, verificationToken);

    return newUser;
  }

  static async signInWithEmailPassword(
    email: string,
    password: string,
    session?: ClientSession
  ) {
    const mongoSession = session ?? null;
    const user = await UserModel.findOne({ email }).session(mongoSession);

    if (!user) {
      return null;
    }

    const isPasswordMatch = await compare(password, user.password);

    if (!isPasswordMatch) {
      return null;
    }

    // generate and sign JWT token
    const token = jwt.sign({ _id: user._id }, envConfig.JWT.secret as string, {
      expiresIn: envConfig.JWT.expiry,
    });

    const userObj = user.toObject();
    delete userObj.password;

    const userData = {
      ...userObj,
      token,
    };

    return userData;
  }

  static async checkUserExists(email: string) {
    const existingUser = await UserModel.findOne({ email });

    return existingUser;
  }
}
