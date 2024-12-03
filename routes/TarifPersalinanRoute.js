import express from "express";
import {
    getTarifPersalinan,
    getTarifPersalinanById,
    createTarifPersalinan,
    updateTarifPersalinan,
    deleteTarifPersalinan
} from "../controllers/TarifPersalinanController.js";

const router = express.Router();

router.get('/api/tarif-persalinan', getTarifPersalinan);
router.get('/api/tarif-persalinan/:id', getTarifPersalinanById);
router.post('/api/tarif-persalinan', createTarifPersalinan);
router.patch('/api/tarif-persalinan/:id', updateTarifPersalinan);
router.delete('/api/tarif-persalinan/:id', deleteTarifPersalinan);

export default router;
