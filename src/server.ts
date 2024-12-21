import dotenv from "dotenv";
dotenv.config();
import { connectMongoDB } from "./config/db.config";
import app from "./app";

const PORT = process.env.PORT || 8000;

const startServer = async () => {
    await connectMongoDB();
    app.listen(PORT, async () => {
      console.log(`🚀 Server is running on http://localhost:${PORT}`);
    });
}

startServer();

