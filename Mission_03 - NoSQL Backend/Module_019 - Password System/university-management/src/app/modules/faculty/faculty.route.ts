import express from 'express';
// import validateRequest from '../../middlewares/validateRequest';
import { FacultyController } from './faculty.controller';
import { FacultyValidaion } from './faculty.validation';
import validateRequest from '../../middlewares/validateRequest';
// import { FacultyValidaion } from './faculty.validation';
const router = express.Router();

router.get('/:id', FacultyController.getSingleFaculty);
router.get('/', FacultyController.getAllFaculties);

router.delete('/:id', FacultyController.deleteFaculty);

router.patch(
  '/:id',
  validateRequest(FacultyValidaion.updateFacultyZodSchema),
  FacultyController.updateFaculty
);

export const FacultyRoutes = router;
