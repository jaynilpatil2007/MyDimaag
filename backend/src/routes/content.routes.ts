import { Router } from "express";
import {
  createContent,
  getContents,
  deleteContent,
} from "../controllers/content.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/content").post(verifyJWT, createContent);

router.route("/content").get(verifyJWT, getContents);

router.route("/content/:_id").delete(verifyJWT, deleteContent);

export default router;
