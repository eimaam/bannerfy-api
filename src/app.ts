import express from "express";
import cors from "cors";
import unauthenticatedRoutes from "./routes/unauthenticated.routes";
import { connectMongoDB } from "./config/db.config";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes";
import { handleValidationErrors } from "./middlewares/validators/requests.validator";
dotenv.config();

const app = express();
app.set('trust proxy', 1);

app.use(express.json());
app.use(cors());

app.use(handleValidationErrors)

app.use("/api/v1", unauthenticatedRoutes);
app.use("/api/v1/auth", authRoutes);


export default app