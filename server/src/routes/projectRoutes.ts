import { Router } from "express";
import type { Request, Response } from "express";
import Project from "../models/Project.js"; 

const router = Router();

router.post('/', async (req: Request, res: Response) => {
  try {
    const { name, githubUrl } = req.body;

    if (!name || !githubUrl) {
      return res.status(400).json({ error: "Missing fields" });
    }

    const newProject = await Project.create({
      name,
      githubUrl
    });

    return res.status(201).json(newProject);

  } catch (error) {
    if ((error as any).code === 11000) {
      return res.status(400).json({ error: "Project with this GitHub URL already exists" });
    }
    
    console.error("Error creating project:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;