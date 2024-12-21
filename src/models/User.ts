import { model, models, Schema } from "mongoose";
import { OnboardingStatus, PlanEnum } from "../types/types";

export interface IUser {
    fullName: string;
    email: string;
    password: string;
    occupation: string;
    industry: string;
    plan: PlanEnum;
    onboardingStatus: OnboardingStatus;
    onboardingStep: number;
    isEmailVerified: boolean;
    bio: string;
}

const userSchema = new Schema<IUser>({
    fullName: {
        type: String,
        minlength: 3,
        maxlength: 50,
        trim: true,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        minlength: 6,
        required: true,
    },
    occupation: {
        type: String,
        required: true,
        trim: true,
    },
    industry: {
        type: String,
        required: true,
        trim: true,
    },
    plan: {
        type: String,
        enum: Object.values(PlanEnum),
        default: PlanEnum.FREE,
        required: true,
    },
    onboardingStatus: {
        type: String,
        enum: Object.values(OnboardingStatus),
        default: OnboardingStatus.PENDING,
    },
    onboardingStep: {
        type: Number,
        default: 1,
    },
    isEmailVerified: {
        type: Boolean,
        default: false,
    },
    bio: {
        type: String,
        default: "",
    },
}, { timestamps: true });

export const UserModel = models.User || model<IUser>("User", userSchema);