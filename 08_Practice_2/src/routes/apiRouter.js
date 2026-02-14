import express from "express";

import v1Router from "./v1Router/v1Router.js";

import v2Router from "./v2Router/v2Router.js";

const router = express.Router();

router.use("/v1", v1Router);
router.use("/v2", v2Router);

export default router;
