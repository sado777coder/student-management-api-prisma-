import express from "express";

import studentRoutes from "./routes/student.routes";
import departmentRoutes from "./routes/department.routes";
import profileRoutes from "./routes/profile.routes";
import courseRoutes from "./routes/course.routes";

const app = express();

app.use(express.json());

app.use("/students", studentRoutes);
app.use("/departments", departmentRoutes);
app.use("/profiles", profileRoutes);
app.use("/courses", courseRoutes);

export default app;