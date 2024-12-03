import express from "express";
import {
    getRawatJalan,
    getRawatJalanById,
    createRawatJalan,
    updateRawatJalan,
    deleteRawatJalan
} from "../controllers/RawatJalanController.js";

const router = express.Router();

router.get('/api/rawat-jalan', getRawatJalan);
router.get('/api/rawat-jalan/:id', getRawatJalanById);
router.post('/api/rawat-jalan', createRawatJalan);
router.patch('/api/rawat-jalan/:id', updateRawatJalan);
router.delete('/api/rawat-jalan/:id', deleteRawatJalan);

export default router;
