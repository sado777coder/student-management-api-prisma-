import { Request, Response } from "express";
import prisma from "../prisma/prisma";

// Create Student
export const createStudent = async (req: Request, res: Response) => {
  try {
    const { name, email, departmentId } = req.body;

    const student = await prisma.student.create({
      data: {
        name,
        email,
        departmentId,
      },
    });

    res.status(201).json(student);
  } catch (error) {
    res.status(500).json({ message: "Error creating student", error });
  }
};

// Get All Students (Pagination + Sorting)
export const getStudents = async (req: Request, res: Response) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 5;

    const sortBy = (req.query.sortBy as string) || "id";
    const order = (req.query.order as "asc" | "desc") || "asc";

    const students = await prisma.student.findMany({
      skip: (page - 1) * limit,
      take: limit,

      orderBy: {
        [sortBy]: order,
      },

      include: {
        department: true,
        profile: true,
        courses: true,
      },
    });

    res.json(students);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Get One Student
export const getStudent = async (req: Request, res: Response) => {
  try {
    const student = await prisma.student.findUnique({
      where: {
        id: Number(req.params.id),
      },
      include: {
        department: true,
        profile: true,
        courses: true,
      },
    });

    if (!student) {
      return res.status(404).json({
        message: "Student not found",
      });
    }

    res.json(student);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Update Student
export const updateStudent = async (req: Request, res: Response) => {
  try {
    const { name, email, departmentId } = req.body;

    const student = await prisma.student.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        name,
        email,
        departmentId,
      },
    });

    res.json(student);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Delete Student
export const deleteStudent = async (req: Request, res: Response) => {
  try {
    await prisma.student.delete({
      where: {
        id: Number(req.params.id),
      },
    });

    res.json({
      message: "Student deleted successfully",
    });
  } catch (error) {
    res.status(500).json(error);
  }
};