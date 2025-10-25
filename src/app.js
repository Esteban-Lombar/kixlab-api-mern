// src/app.js
import express from "express";
import cors from "cors";
import routes from "./routes/index.js";

const app = express();

// Orígenes permitidos (local + producción)
const allowedOrigins = [
  "http://localhost:5173",
  "https://kixlab-app.vercel.app"
];

app.use(cors({
  origin: allowedOrigins,
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());

// Rutas principales
app.use("/", routes);

// ⚠️ ESTE ES EL PUNTO CLAVE
export default app;
