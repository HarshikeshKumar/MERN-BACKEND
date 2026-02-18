import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  return res.json({
    message: "V1 tweets Router",
  });
});

router.get("/:id", (req, res) => {
  return res.json({
    message: "V1 tweets router with ID",
    id: req.params.id,
  });
});

export default router;
