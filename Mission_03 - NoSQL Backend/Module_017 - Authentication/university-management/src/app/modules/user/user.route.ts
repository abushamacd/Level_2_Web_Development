import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { UserController } from './user.controller';
import { StudentValidaion } from '../student/student.validation';
import { FacultyValidaion } from '../faculty/faculty.validation';
import { AdminValidation } from '../admin/admin.validation';
const router = express.Router();

router.post(
  '/create-student',
  validateRequest(StudentValidaion.createUserZodSchema),
  // auth(),
  UserController.createStudent
);
router.post(
  '/create-faculty',
  validateRequest(FacultyValidaion.createFacultyZodSchema),
  UserController.createFacultyMember
);
router.post(
  '/create-admin',
  validateRequest(AdminValidation.createAdminZodSchema),
  UserController.createAdmin
);

export const UserRoutes = router;
