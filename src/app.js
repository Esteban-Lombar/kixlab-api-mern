import cors from "cors";

const allowedOrigins = [
  "http://localhost:5173",        // local dev
  "https://kixlab-app.vercel.app" // frontend deploy
];

app.use(cors({
  origin: allowedOrigins,
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
