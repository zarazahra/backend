import express from "express";
import {
    getFasilitasUnggulan,
    getFasilitasUnggulanById,
    createFasilitasUnggulan,
    updateFasilitasUnggulan,
    deleteFasilitasUnggulan
} from "../controllers/FasilitasUnggulanController.js";

const router = express.Router();

router.get('/api/fasilitas-unggulan', getFasilitasUnggulan);
router.get('/api/fasilitas-unggulan/:id', getFasilitasUnggulanById);
router.post('/api/fasilitas-unggulan', createFasilitasUnggulan);
router.patch('/api/fasilitas-unggulan/:id', updateFasilitasUnggulan);
router.delete('/api/fasilitas-unggulan/:id', deleteFasilitasUnggulan);

export default router;
