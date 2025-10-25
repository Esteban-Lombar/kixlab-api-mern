// src/app.js
import express from "express";
import cors from "cors";
import routes from "./routes/index.js";

const app = express();
app.use(cors());
app.use(express.json());

// Soporta /ping y /api/ping (útil para local y Vercel)
app.use("/", routes);
app.use("/api", routes);

export default app;
