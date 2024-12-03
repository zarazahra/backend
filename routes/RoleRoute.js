import express from "express";
import {
    getRole,
    getRoleById,
    createRole,
    updateRole,
    deleteRole
} from "../controllers/RoleController.js";

const router = express.Router();

router.get('/api/role',getRole);
router.get('/api/role/:id',getRoleById);
router.post('/api/role',createRole);
router.patch('/api/role',updateRole);
router.delete('/api/role/:id',deleteRole);

export default router;

