import express from "express";
import cors from "cors";
import unauthenticatedRoutes from "./routes/unauthenticated.routes";
import { connectMongoDB } from "./config/db.config";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1", unauthenticatedRoutes);

app.listen(PORT, async () => {
  await connectMongoDB();
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
