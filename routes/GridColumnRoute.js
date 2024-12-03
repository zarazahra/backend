import express  from "express";
import {
    getGridColumn,
    getGridColumnById,
    createGridColumn,
    updateGridColumn,
    deleteGridColumn
} from "../controllers/GridColumnController.js";

const router = express.Router();

router.get('/api/gridColumn',getGridColumn);
router.get('/api/gridColumn/:id', getGridColumnById);
router.post('/api/gridColumn', createGridColumn);
router.patch('/api/gridColumn/:id', updateGridColumn);
router.delete('/api/gridColumn/:id', deleteGridColumn);

export default router;