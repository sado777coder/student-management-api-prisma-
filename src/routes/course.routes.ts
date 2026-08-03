import { Router } from "express";
import {
  createCourse,
  getCourses,
  getCourse,
  updateCourse,
  deleteCourse,
  enrollStudent,
  removeStudent,
} from "../controllers/course.controller";

const router = Router();

router.post("/", createCourse);
router.get("/", getCourses);
router.get("/:id", getCourse);
router.put("/:id", updateCourse);
router.delete("/:id", deleteCourse);

// Many-to-Many operations
router.post("/:id/enroll", enrollStudent);
router.post("/:id/remove", removeStudent);

export default router;