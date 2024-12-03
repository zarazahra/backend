import express  from "express";
import {
    getFaq,
    getFaqById,
    createFaq,
    updateFaq,
    deleteFaq
} from "../controllers/FaqController.js";

const router = express.Router();

router.get('/api/faq',getFaq);
router.get('/api/faq/:id', getFaqById);
router.post('/api/faq', createFaq);
router.patch('/api/faq/:id', updateFaq);
router.delete('/api/faq/:id', deleteFaq);

export default router;