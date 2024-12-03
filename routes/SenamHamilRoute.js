import express from "express";
import {
    getSenamHamil,
    getSenamHamilById,
    createSenamHamil,
    updateSenamHamil,
    deleteSenamHamil
} from "../controllers/SenamHamilController.js";

const router = express.Router();

router.get('/api/senam-hamil', getSenamHamil); // Mendapatkan semua data senam hamil
router.get('/api/senam-hamil/:id', getSenamHamilById); // Mendapatkan data senam hamil berdasarkan ID
router.post('/api/senam-hamil', createSenamHamil); // Membuat data senam hamil baru
router.patch('/api/senam-hamil/:id', updateSenamHamil); // Mengupdate data senam hamil berdasarkan ID
router.delete('/api/senam-hamil/:id', deleteSenamHamil); // Menghapus data senam hamil berdasarkan ID

export default router;
