import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  return res.json({
    message: "V2 tweet route",
  });
});

router.get("/:id", (req, res) => {
  return res.json({
    message: "V2 tweet route with ID",
    id: req.params.id,
  });
});

export default router;
