import express  from "express";
import {
    getDataDokter,
    getDataDokterById,
    createDataDokter,
    updateDataDokter,
    deleteDataDokter,
    getCountDokter
} from "../controllers/DataDokterController.js";

const router = express.Router();

router.get('/api/dataDokter',getDataDokter);
router.get('/api/dataDokter/:id', getDataDokterById);
router.post('/api/dataDokter', createDataDokter);
router.patch('/api/dataDokter/:id', updateDataDokter);
router.delete('/api/dataDokter/:id', deleteDataDokter);
router.get('/api/countDokter', getCountDokter);

export default router;