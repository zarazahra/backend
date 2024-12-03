import express  from "express";
import {
    getGaleriFoto,
    getGaleriFotoById,
    createGaleriFoto,
    updateGaleriFoto,
    deleteGaleriFoto
} from "../controllers/GaleriFotoController.js";

const router = express.Router();

router.get('/api/galeriFoto',getGaleriFoto);
router.get('/api/galeriFoto/:id', getGaleriFotoById);
router.post('/api/galeriFoto', createGaleriFoto);
router.patch('/api/galeriFoto/:id', updateGaleriFoto);
router.delete('/api/galeriFoto/:id', deleteGaleriFoto);

export default router;