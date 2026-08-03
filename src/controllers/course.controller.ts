import { Request, Response } from "express";
import prisma from "../prisma/prisma";

// Create Course
export const createCourse = async (req: Request, res: Response) => {
  try {
    const course = await prisma.course.create({
      data: {
        title: req.body.title,
      },
    });

    res.status(201).json(course);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Get Courses
export const getCourses = async (_req: Request, res: Response) => {
  try {
    const courses = await prisma.course.findMany({
      include: {
        students: true,
      },
    });

    res.json(courses);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Get One Course
export const getCourse = async (req: Request, res: Response) => {
  try {
    const course = await prisma.course.findUnique({
      where: {
        id: Number(req.params.id),
      },
      include: {
        students: true,
      },
    });

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    res.json(course);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Update Course
export const updateCourse = async (req: Request, res: Response) => {
  try {
    const course = await prisma.course.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        title: req.body.title,
      },
    });

    res.json(course);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Delete Course
export const deleteCourse = async (req: Request, res: Response) => {
  try {
    await prisma.course.delete({
      where: {
        id: Number(req.params.id),
      },
    });

    res.json({
      message: "Course deleted successfully",
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

// Enroll Student in Course
export const enrollStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.body;

    const course = await prisma.course.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        students: {
          connect: {
            id: studentId,
          },
        },
      },
      include: {
        students: true,
      },
    });

    res.json(course);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Remove Student from Course
export const removeStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.body;

    const course = await prisma.course.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        students: {
          disconnect: {
            id: studentId,
          },
        },
      },
      include: {
        students: true,
      },
    });

    res.json(course);
  } catch (error) {
    res.status(500).json(error);
  }
};