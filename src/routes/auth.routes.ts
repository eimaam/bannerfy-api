import { Router } from "express";
import { Users } from "../controllers/users.controller";
import { signUpValidator } from "../middlewares/validators/signup-validator";
import { signInValidator } from "../middlewares/validators/signin-validator";

const authRoutes = Router()

authRoutes.post('/signup', signUpValidator, Users.signUp)
authRoutes.post('/signin', signInValidator, Users.signIn)
export default authRoutes