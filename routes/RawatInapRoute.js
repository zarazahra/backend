import express from "express";
import {
    getRawatInap,
    getRawatInapById,
    createRawatInap,
    updateRawatInap,
    deleteRawatInap
} from "../controllers/RawatInapController.js";

const router = express.Router();

router.get('/api/rawat-inap', getRawatInap);
router.get('/api/rawat-inap/:id', getRawatInapById);
router.post('/api/rawat-inap', createRawatInap);
router.patch('/api/rawat-inap/:id', updateRawatInap);
router.delete('/api/rawat-inap/:id', deleteRawatInap);

export default router;
