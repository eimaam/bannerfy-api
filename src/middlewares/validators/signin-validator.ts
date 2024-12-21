import { check } from "express-validator";

export const signInValidator = [
    check("email")
    .trim()
        .notEmpty()
        .withMessage("Email is required")
        .isEmail()
        .withMessage("Invalid email address")
        .isLength({ min: 5, max: 50 })
        .withMessage("Email must be between 5 and 50 characters"),
    check("password")
    .trim()
        .notEmpty()
        .withMessage("Password is required")
        .isLength({ min: 6 })
        .withMessage("Invalid password"),
];