import { Router } from "express";
// const express = require("express"); -> normal commonjs, when not using TS

const router = Router();

router.post("/");
router.get("/");
router.patch("/:id");
router.delete("/:id");

export default router;
