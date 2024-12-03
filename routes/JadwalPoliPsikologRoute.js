import express  from "express";
import {
    getJadwalPoliPsikolog,
    getJadwalPoliPsikologById,
    createJadwalPoliPsikolog,
    updateJadwalPoliPsikolog,
    deleteJadwalPoliPsikolog
} from "../controllers/JadwalPoliPsikologController.js";

const router = express.Router();

router.get('/api/jadwalPoliPsikolog',getJadwalPoliPsikolog);
router.get('/api/jadwalPoliPsikolog/:id', getJadwalPoliPsikologById);
router.post('/api/jadwalPoliPsikolog', createJadwalPoliPsikolog);
router.patch('/api/jadwalPoliPsikolog/:id', updateJadwalPoliPsikolog);
router.delete('/api/jadwalPoliPsikolog/:id', deleteJadwalPoliPsikolog);

export default router;