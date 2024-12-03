import express  from "express";
import {
    getDataSpesialis,
    getDataSpesialisById,
    createDataSpesialis,
    updateDataSpesialis,
    deleteDataSpesialis
} from "../controllers/DataSpesialisController.js";

const router = express.Router();

router.get('/api/dataSpesialis',getDataSpesialis);
router.get('/api/dataSpesialis/:id', getDataSpesialisById);
router.post('/api/dataSpesialis', createDataSpesialis);
router.patch('/api/dataSpesialis/:id', updateDataSpesialis);
router.delete('/api/dataSpesialis/:id', deleteDataSpesialis);

export default router;