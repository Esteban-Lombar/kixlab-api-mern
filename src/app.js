import cors from "cors";
import express from "express";
import routes from "./routes/index.js";

const app = express();

// 🌍 dominios permitidos (local y producción)
const allowedOrigins = [
  "http://localhost:5173",
  "https://kixlab.vercel.app" // ✅ frontend en producción
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("No permitido por CORS"));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  })
);

app.use(express.json());
app.use("/", routes);

export default app;
