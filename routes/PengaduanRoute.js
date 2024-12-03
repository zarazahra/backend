import express  from "express";
import {
    getPengaduan,
    getPengaduanById,
    createPengaduan,
    updatePengaduan,
    deletePengaduan
} from "../controllers/PengaduanController.js";

const router = express.Router();

router.get('/api/pengaduan',getPengaduan);
router.get('/api/pengaduan/:id', getPengaduanById);
router.post('/api/pengaduan', createPengaduan);
router.patch('/api/pengaduan/:id', updatePengaduan);
router.delete('/api/pengaduan/:id', deletePengaduan);

export default router;