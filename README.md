# Student Management API (Prisma)

A RESTful Student Management API built with **Node.js**, **Express.js**, **TypeScript**, **PostgreSQL**, and **Prisma ORM**.

This project demonstrates CRUD operations, database relationships (One-to-One, One-to-Many, and Many-to-Many), pagination, sorting, and Prisma ORM.

---

## Features

- CRUD Operations
- Prisma ORM
- PostgreSQL Database
- TypeScript
- Express.js
- One-to-One Relationship
- One-to-Many Relationship
- Many-to-Many Relationship
- Pagination
- Sorting

---

## Technologies Used

- Node.js
- Express.js
- TypeScript
- Prisma ORM
- PostgreSQL

---

## Project Structure

```
src/
│
├── controllers/
├── prisma/
│   └── prisma.ts
├── routes/
├── server.ts
│
prisma/
│
├── migrations/
└── schema.prisma
```

---

## Installation

Clone the repository

```bash
git clone https://github.com/your-username/student-management-api.git
```

Navigate into the project

```bash
cd student-management-api
```

Install dependencies

```bash
npm install
```

---

## Environment Variables

Create a `.env` file.

Example:

```env
PORT=3006

DATABASE_URL="postgresql://postgres:your_password@localhost:5432/student_management_with_prisma?schema=public"
```

---

## Prisma Setup

Generate Prisma Client

```bash
npx prisma generate
```

Run migrations

```bash
npx prisma migrate dev --name init
```

Open Prisma Studio

```bash
npx prisma studio
```

---

## Start the Server

Development

```bash
npm run dev
```

Production

```bash
npm run build
npm start
```

---

# Database Relationships

## One-to-One (1:1)

Student ↔ Profile

Each student has one profile.

---

## One-to-Many (1:M)

Department → Students

One department can have many students.

Each student belongs to one department.

---

## Many-to-Many (N:M)

Students ↔ Courses

A student can enroll in many courses.

A course can have many students.

---

# API Endpoints

## Departments

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /departments | Create Department |
| GET | /departments | Get All Departments |
| GET | /departments/:id | Get One Department |
| PUT | /departments/:id | Update Department |
| DELETE | /departments/:id | Delete Department |

---

## Students

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /students | Create Student |
| GET | /students | Get All Students |
| GET | /students/:id | Get One Student |
| PUT | /students/:id | Update Student |
| DELETE | /students/:id | Delete Student |

Supports:

- Pagination
- Sorting

Example:

```
GET /students?page=1&limit=5
```

```
GET /students?sortBy=name&order=asc
```

---

## Profiles

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /profiles | Create Profile |
| GET | /profiles | Get All Profiles |
| GET | /profiles/:id | Get One Profile |
| PUT | /profiles/:id | Update Profile |
| DELETE | /profiles/:id | Delete Profile |

---

## Courses

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /courses | Create Course |
| GET | /courses | Get All Courses |
| GET | /courses/:id | Get One Course |
| PUT | /courses/:id | Update Course |
| DELETE | /courses/:id | Delete Course |

---

## Student Enrollment

Enroll a student in a course

```
POST /courses/:id/enroll
```

Example

```json
{
  "studentId": 1
}
```

Remove a student from a course

```
POST /courses/:id/remove
```

Example

```json
{
  "studentId": 1
}
```

---

# Sample Request

Create Student

```
POST /students
```

```json
{
    "name": "Amos Sottie",
    "email": "amos@gmail.com",
    "departmentId": 1
}
```

---

# Author

Amos Ofori Sottie

Full stack Developer | Health Information Officer | Data Analyst
