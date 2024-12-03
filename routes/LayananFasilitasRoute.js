import express  from "express";
import {
    getLayananFasilitas,
    getLayananFasilitasById,
    createLayananFasilitas,
    updateLayananFasilitas,
    deleteLayananFasilitas
} from "../controllers/LayananFasilitasController.js";

const router = express.Router();

router.get('/api/layananFasilitas',getLayananFasilitas);
router.get('/api/layananFasilitas/:id', getLayananFasilitasById);
router.post('/api/layananFasilitas', createLayananFasilitas);
router.patch('/api/layananFasilitas/:id', updateLayananFasilitas);
router.delete('/api/layananFasilitas/:id', deleteLayananFasilitas);

export default router;

