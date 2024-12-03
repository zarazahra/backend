import express  from "express";
import {
    getCarousel,
    getCarouselById,
    createCarousel,
    updateCarousel,
    deleteCarousel
} from "../controllers/CarouselController.js";

const router = express.Router();

router.get('/api/carousel',getCarousel);
router.get('/api/carousel/:id', getCarouselById);
router.post('/api/carousel', createCarousel);
router.patch('/api/carousel/:id', updateCarousel);
router.delete('/api/carousel/:id', deleteCarousel);

export default router;