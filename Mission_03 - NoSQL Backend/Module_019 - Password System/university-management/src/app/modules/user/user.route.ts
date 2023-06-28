import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { UserController } from './user.controller';
import { StudentValidaion } from '../student/student.validation';
import { FacultyValidaion } from '../faculty/faculty.validation';
import { AdminValidation } from '../admin/admin.validation';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
const router = express.Router();

router.post(
  '/create-student',
  validateRequest(StudentValidaion.createUserZodSchema),
  auth(ENUM_USER_ROLE.ADMIN),
  UserController.createStudent
);
router.post(
  '/create-faculty',
  validateRequest(FacultyValidaion.createFacultyZodSchema),
  auth(ENUM_USER_ROLE.ADMIN),
  UserController.createFacultyMember
);
router.post(
  '/create-admin',
  validateRequest(AdminValidation.createAdminZodSchema),
  auth(ENUM_USER_ROLE.ADMIN),
  UserController.createAdmin
);

export const UserRoutes = router;
