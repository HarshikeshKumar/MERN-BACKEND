import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  return res.json({
    message: "V1 comments router",
  });
});

router.get("/:id", (req, res) => {
  return res.json({
    message: "V1 comments router with Id",
    id: req.params.id,
  });
});

export default router;
