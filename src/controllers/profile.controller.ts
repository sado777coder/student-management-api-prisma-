import { Request, Response } from "express";
import prisma from "../prisma/prisma";

// Create Profile
export const createProfile = async (req: Request, res: Response) => {
  try {
    const { bio, studentId } = req.body;

    const profile = await prisma.profile.create({
      data: {
        bio,
        studentId,
      },
    });

    res.status(201).json(profile);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Get Profiles
export const getProfiles = async (_req: Request, res: Response) => {
  try {
    const profiles = await prisma.profile.findMany({
      include: {
        student: true,
      },
    });

    res.json(profiles);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Get One Profile
export const getProfile = async (req: Request, res: Response) => {
  try {
    const profile = await prisma.profile.findUnique({
      where: {
        id: Number(req.params.id),
      },
      include: {
        student: true,
      },
    });

    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }

    res.json(profile);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Update Profile
export const updateProfile = async (req: Request, res: Response) => {
  try {
    const profile = await prisma.profile.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        bio: req.body.bio,
      },
    });

    res.json(profile);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Delete Profile
export const deleteProfile = async (req: Request, res: Response) => {
  try {
    await prisma.profile.delete({
      where: {
        id: Number(req.params.id),
      },
    });

    res.json({
      message: "Profile deleted successfully",
    });
  } catch (error) {
    res.status(500).json(error);
  }
};