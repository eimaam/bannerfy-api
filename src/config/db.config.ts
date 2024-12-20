import dotenv from "dotenv";
dotenv.config();
import { connect, connection } from "mongoose";

export enum NodeEnv {
  DEVELOPMENT = "development",
  PRODUCTION = "production",
}

const PROD_MONGO_URI = process.env.PROD_MONGODB_URI;
const DEV_MONGO_URI = process.env.DEV_MONGODB_URI;
const NODE_ENV = process.env.NODE_ENV;

const MONGO_URI =
  NODE_ENV === NodeEnv.PRODUCTION ? PROD_MONGO_URI : DEV_MONGO_URI;

export const connectMongoDB = async () => {
  try {
    if (!MONGO_URI) {
      throw new Error("Mongo URI is not provided");
    }

    await connect(MONGO_URI as string, {
      connectTimeoutMS: 15000,
    }).then(() => {
      console.log(`🚀 Connected to ${NODE_ENV} DB successfully!`);
    });
  } catch (error: any) {
    console.error(`❌ Error while connecting to DB: ${error.message}`);
    // Exit process with failure
    process.exit(1);
  }

  // Handle disconnect event
  connection.on("disconnected", () => {
    console.log("Database connection disconnected. Retrying...");
    connectMongoDB();
  });

  // Handle error event
  connection.on("error", (error) => {
    console.error(`❌ Database connection error: ${error.message}`);
    // Exit process with failure
    process.exit(1);
  });
};
