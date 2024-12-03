import express  from "express";
import {
    getTtgKami,
    getTtgKamiById,
    createTtgKami,
    updateTtgKami,
    deleteTtgKami
} from "../controllers/TtgKamiController.js";

const router = express.Router();

router.get('/api/ttgKami',getTtgKami);
router.get('/api/ttgKami/:id', getTtgKamiById);
router.post('/api/ttgKami', createTtgKami);
router.patch('/api/ttgKami/:id', updateTtgKami);
router.delete('/api/ttgKami/:id', deleteTtgKami);

export default router;