import express from "express";
import {
  createPost,
  getPosts,
  updatePost,
  deletePost,
  likePosts,
} from "../controllers/posts.js";
import auth from "../middleware/auth.js";

const router = express.Router();

// http://localhost:5000/posts
router.get("/", getPosts);
router.post("/", auth, createPost);
router.patch("/:id", auth, updatePost);
router.delete("/:id", auth, deletePost);
router.patch("/:id/likePost", auth, likePosts);

export default router;
