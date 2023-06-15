import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { UserController } from './user.controller';
import { StudentValidaion } from '../student/student.validation';
import { FacultyValidaion } from '../faculty/faculty.validation';
const router = express.Router();

router.post(
  '/create-student',
  validateRequest(StudentValidaion.createUserZodSchema),
  UserController.createStudent
);
router.post(
  '/create-faculty',
  validateRequest(FacultyValidaion.createFacultyZodSchema),
  UserController.createFacultyMember
);

//create faculty

//create admin
export const UserRoutes = router;
