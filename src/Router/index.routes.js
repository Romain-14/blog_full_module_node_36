import express from "express";

import { home_view, story_view, not_found_view, admin_view } from "../controllers/views.js";

import { add,addComment } from "../controllers/story.js";

const router = express.Router();


router.get("/", home_view);

router.get("/story/:id", story_view);
router.post("/story/:id/comment", addComment);

router.get("/admin", admin_view);
router.post("/story/add", add);

router.get("*", not_found_view);

export default router;