import { Request, Response } from "express";
import prisma from "../prisma/prisma";

// Create Department
export const createDepartment = async (req: Request, res: Response) => {
  try {
    const department = await prisma.department.create({
      data: {
        name: req.body.name,
      },
    });

    res.status(201).json(department);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Get All Departments
export const getDepartments = async (_req: Request, res: Response) => {
  try {
    const departments = await prisma.department.findMany({
      include: {
        students: true,
      },
    });

    res.json(departments);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Get One Department
export const getDepartment = async (req: Request, res: Response) => {
  try {
    const department = await prisma.department.findUnique({
      where: {
        id: Number(req.params.id),
      },
      include: {
        students: true,
      },
    });

    if (!department) {
      return res.status(404).json({ message: "Department not found" });
    }

    res.json(department);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Update Department
export const updateDepartment = async (req: Request, res: Response) => {
  try {
    const department = await prisma.department.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        name: req.body.name,
      },
    });

    res.json(department);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Delete Department
export const deleteDepartment = async (req: Request, res: Response) => {
  try {
    await prisma.department.delete({
      where: {
        id: Number(req.params.id),
      },
    });

    res.json({
      message: "Department deleted successfully",
    });
  } catch (error) {
    res.status(500).json(error);
  }
};