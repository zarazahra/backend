import express from "express";
import { getUsers, Register, Login, Logout, Delete,updateUser,  } from "../controllers/User.js";
import { verifyToken, isAdmin } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";

 
const router = express.Router();
 
router.get('/api/users', getUsers);
router.post('/api/users', Register);
router.post('/api/login', Login);
router.get('/api/token', refreshToken);
router.delete('/api/logout', Logout);
router.delete('/api/users/:id', Delete);
router.patch('/api/users/:id', updateUser);
router.get('/currentUser', verifyToken, async (req, res) => {
  try {
    const userId = req.user.userId; // Use 'req.user.userId' based on your verifyToken middleware
    const user = await UserModel.findById(userId); // Replace UserModel with your actual user model
    
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.json({
      id: user.id,
      name: user.name, // Ensure the 'name' field is returned
      email: user.email,
      roleID: user.roleID,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

  
  

export default router;