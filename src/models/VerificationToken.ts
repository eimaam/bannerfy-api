import mongoose, { model, models, Schema } from "mongoose";
import envConfig from "../config/env.config";
import { TokenType } from "../types/types";

export interface IVerificationToken {
    userId: mongoose.Types.ObjectId;
    token: string;
    type: TokenType;
    createdAt: Date;
}

const verificationTokenSchema = new Schema<IVerificationToken>({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    token: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        enum: Object.values(TokenType),
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: envConfig.EMAIL_VERIFICATION_TOKEN_EXPIRY,
    },
}, { timestamps: true });


const VerificationTokenModel = models.VerificationToken || model<IVerificationToken>("VerificationToken", verificationTokenSchema);

export default VerificationTokenModel;

