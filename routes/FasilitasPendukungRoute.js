import express from "express";
import {
    getFasilitasPendukung,
    getFasilitasPendukungById,
    createFasilitasPendukung,
    updateFasilitasPendukung,
    deleteFasilitasPendukung
} from "../controllers/FasilitasPendukungController.js";

const router = express.Router();

router.get('/api/fasilitas-pendukung', getFasilitasPendukung);
router.get('/api/fasilitas-pendukung/:id', getFasilitasPendukungById);
router.post('/api/fasilitas-pendukung', createFasilitasPendukung);
router.patch('/api/fasilitas-pendukung/:id', updateFasilitasPendukung);
router.delete('/api/fasilitas-pendukung/:id', deleteFasilitasPendukung);

export default router;
