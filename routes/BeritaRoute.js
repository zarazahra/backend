import express  from "express";
import {
    getBerita,
    getBeritaById,
    createBerita,
    updateBerita,
    deleteBerita
} from "../controllers/BeritaController.js";

const router = express.Router();

router.get('/api/berita',getBerita);
router.get('/api/berita/:id', getBeritaById);
router.post('/api/berita', createBerita);
router.patch('/api/berita/:id', updateBerita);
router.delete('/api/berita/:id', deleteBerita);

export default router;