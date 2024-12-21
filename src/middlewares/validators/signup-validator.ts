import { body } from "express-validator";

export const signUpValidator = [
    body("fullName").isString().isLength({ min: 3 }).withMessage("Full name must be at least 3 characters long").exists().withMessage("Full name is required"),
    body("email").isEmail().withMessage("Invalid email").exists().withMessage("Email is required"),
    body("password").isString().isLength({ min: 6 }).withMessage("Password must be at least 6 characters long").exists().withMessage("Password is required"),
    body("occupation").isString().exists().withMessage("Occupation is required"),
    body("industry").isString().exists().withMessage("Industry is required"),
    body("bio").isString().exists().withMessage("Bio is required"),
]