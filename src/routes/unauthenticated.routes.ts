import { Router } from "express";

const unauthenticatedRoutes = Router();

unauthenticatedRoutes.get("/healthcheck", (_req, res) => {
    res.status(200).json({
        success: true,
        message: "🚀 API is running smoothly! 🌟",
    });
});


export default unauthenticatedRoutes;