import express  from "express";
import {
    getJadwalPoliFisioterapi,
    getJadwalPoliFisioterapiById,
    createJadwalPoliFisioterapi,
    updateJadwalPoliFisioterapi,
    deleteJadwalPoliFisioterapi
} from "../controllers/JadwalPoliFisioterapiController.js";

const router = express.Router();

router.get('/api/jadwalPoliFisioterapi',getJadwalPoliFisioterapi);
router.get('/api/jadwalPoliFisioterapi/:id', getJadwalPoliFisioterapiById);
router.post('/api/jadwalPoliFisioterapi', createJadwalPoliFisioterapi);
router.patch('/api/jadwalPoliFisioterapi/:id', updateJadwalPoliFisioterapi);
router.delete('/api/jadwalPoliFisioterapi/:id', deleteJadwalPoliFisioterapi);

export default router;