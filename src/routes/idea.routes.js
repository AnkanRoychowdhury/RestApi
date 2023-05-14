import express from 'express';
import {createIdea, deleteIdea, deleteIdeaById, fetchAllIdeas, getIdeaById, updateIdea} from "../controllers/idea.controller.js";


/**
 * Define route for the calls like
 * 
 * GET 127.0.0.1:8080/ideaApp/v1/ideas
 * GET 127.0.0.1:8080/ideaApp/v1/idea/1 <--- {id} // Get Idea By ID
 * POST 127.0.0.1:8080/ideaApp/v1/create
 * PUT 127.0.0.1:8080/ideaApp/v1/update/1 <--- {id}
 * PUT 127.0.0.1:8080/ideaApp/v1/delete/1 <--- {id}
 */

const router = express.Router();

// GET Method
router.get("/ideaApp/v1/ideas",fetchAllIdeas);
router.get("/ideaApp/v1/idea/:id",getIdeaById);

// POST Method
router.post("/ideaApp/v1/create",createIdea);

// PUT Method
router.put("/ideaApp/v1/update/:id",updateIdea);

// DELETE Method
router.delete("/ideaApp/v1/delete",deleteIdea);
router.delete("/ideaApp/v1/delete/:id",deleteIdeaById);

export default router;