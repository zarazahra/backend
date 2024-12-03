import express from "express";
import {
    getSpesialis,
    getSpesialisById,
    createSpesialis,
    updateSpesialis,
    deleteSpesialis
} from "../controllers/SpesialisController.js";

const router = express.Router();

router.get('/api/spesialis', getSpesialis);
router.get('/api/spesialis/:id', getSpesialisById);
router.post('/api/spesialis', createSpesialis);
router.patch('/api/spesialis/:id', updateSpesialis); // Tambahkan :id pada endpoint update
router.delete('/api/spesialis/:id', deleteSpesialis);

export default router;
