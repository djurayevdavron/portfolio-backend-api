import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import projectRoutes from "./routes/project.routes.js";
import contactRoutes from "./routes/contact.routes.js";
import errorHandler from "./middleware/error.middleware.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Portfolio API is running",
  });
});
app.use("/api/projects", projectRoutes);
app.use("/api/contact", contactRoutes);
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "API Route Not Found",
  });
});
app.use(errorHandler);
export default app;