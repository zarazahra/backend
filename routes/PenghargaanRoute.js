import express  from "express";
import {
    getPenghargaan,
    getPenghargaanById,
    createPenghargaan,
    updatePenghargaan,
    deletePenghargaan,
    getCountPenghargaan
} from "../controllers/PenghargaanController.js";

const router = express.Router();

router.get('/api/penghargaan',getPenghargaan);
router.get('/api/penghargaan/:id', getPenghargaanById);
router.post('/api/penghargaan', createPenghargaan);
router.patch('/api/penghargaan/:id', updatePenghargaan);
router.delete('/api/penghargaan/:id', deletePenghargaan);
router.get('/api/countPenghargaan', getCountPenghargaan);

export default router;