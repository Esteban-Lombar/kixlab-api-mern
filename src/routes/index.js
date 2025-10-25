import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("<h2>🚀 Backend KIXLAB activo y funcionando correctamente</h2>");
});

router.get("/ping", (req, res) => {
  res.json({
    success: true,
    message: "Backend KIXLAB funcionando correctamente 🚀",
  });
});

export default router;
