import express  from "express";
import {
    getManagemen,
    getManagemenById,
    createManagemen,
    updateManagemen,
    deleteManagemen
} from "../controllers/ManagemenController.js";

const router = express.Router();

router.get('/api/managemen',getManagemen);
router.get('/api/managemen/:id', getManagemenById);
router.post('/api/managemen', createManagemen);
router.patch('/api/managemen/:id', updateManagemen);
router.delete('/api/managemen/:id', deleteManagemen);

export default router;