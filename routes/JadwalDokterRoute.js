import express  from "express";
import {
    getJadwalDokter,
    getJadwalDokterById,
    createJadwalDokter,
    updateJadwalDokter,
    deleteJadwalDokter
} from "../controllers/JadwalDokterController.js";

const router = express.Router();

router.get('/api/jadwalDokter',getJadwalDokter);
router.get('/api/jadwalDokter/:id', getJadwalDokterById);
router.post('/api/jadwalDokter', createJadwalDokter);
router.patch('/api/jadwalDokter/:id', updateJadwalDokter);
router.delete('/api/jadwalDokter/:id', deleteJadwalDokter);

export default router;