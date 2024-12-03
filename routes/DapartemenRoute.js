import express  from "express";
import {
     getDepartments,
    getDepartmentById,
    createDepartment,
    updateDepartment,
    deleteDepartment,
    getCountDapartement
} from "../controllers/DapartemenController.js";

const router = express.Router();

router.get('/api/departments', getDepartments);
router.get('/api/departments/:id', getDepartmentById);
router.post('/api/departments', createDepartment);
router.patch('/api/departments/:id', updateDepartment);
router.delete('/api/departments/:id', deleteDepartment);
router.get('/api/countDapartement', getCountDapartement);

export default router;