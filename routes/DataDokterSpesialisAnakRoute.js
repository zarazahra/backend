import express  from "express";
import {
    getDataDokterSpesialisAnak,
    getDataDokterSpesialisAnakById,
    createDataDokterSpesialisAnak,
    updateDataDokterSpesialisAnak,
    deleteDataDokterSpesialisAnak,
    getCountDokter
} from "../controllers/DataDokterSpesialisAnakController.js";

const router = express.Router();

router.get('/api/dataDokter',getDataDokterSpesialisAnak);
router.get('/api/dataDokter/:id', getDataDokterSpesialisAnakById);
router.post('/api/dataDokter', createDataDokterSpesialisAnak);
router.patch('/api/dataDokter/:id', updateDataDokterSpesialisAnak);
router.delete('/api/dataDokter/:id', deleteDataDokterSpesialisAnak);
router.get('/api/countDokter', getCountDokter);

export default router;