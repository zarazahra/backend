import express  from "express";
import {
    getDataLabor,
    getDataLaborById,
    createDataLabor,
    updateDataLabor,
    deleteDataLabor,
    getCountLabor
} from "../controllers/LaborController.js";

const router = express.Router();

router.get('/api/dataLabor',getDataLabor);
router.get('/api/dataLabor/:id', getDataLaborById);
router.post('/api/dataLabor', createDataLabor);
router.patch('/api/dataLabor/:id', updateDataLabor);
router.delete('/api/dataLabor/:id', deleteDataLabor);
router.get('/api/countLabor', getCountLabor);

export default router;