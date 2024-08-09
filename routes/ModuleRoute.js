import express  from "express";
import {
    getModul,
    getModulById,
    createModul,
    updateModul,
    deleteModul
} from "../controllers/ModulController.js";

const router = express.Router();

router.get('/api/modul',getModul);
router.get('/api/modul/:id', getModulById);
router.post('/api/modul', createModul);
router.patch('/api/modul/:id', updateModul);
router.delete('/api/modul/:id', deleteModul);

export default router;