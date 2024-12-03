import express from "express";
import {
    getLayananPenunjang,
    getLayananPenunjangById,
    createLayananPenunjang,
    updateLayananPenunjang,
    deleteLayananPenunjang
} from "../controllers/LayananPenunjangController.js";

const router = express.Router();

router.get('/api/layanan-penunjang', getLayananPenunjang);
router.get('/api/layanan-penunjang/:id', getLayananPenunjangById);
router.post('/api/layanan-penunjang', createLayananPenunjang);
router.patch('/api/layanan-penunjang/:id', updateLayananPenunjang);
router.delete('/api/layanan-penunjang/:id', deleteLayananPenunjang);

export default router;
