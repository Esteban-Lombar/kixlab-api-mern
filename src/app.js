import express from "express";
import cors from "cors";
import routes from "./routes/index.js";

const app = express();
app.use(cors());
app.use(express.json());

// Solo una ruta base (sin /api)
app.use("/", routes);

export default app;
