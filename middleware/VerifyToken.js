import jwt from "jsonwebtoken";
import Users from "../models/UserModel.js";
 
export const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.sendStatus(401); // Unauthorized
    
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) return res.sendStatus(403); // Forbidden
        
        // Attach the entire decoded object to req.user
        req.user = {
            email: decoded.email,
            userId: decoded.userId // Assuming userId is part of the token payload
        };
        next();
    });
};

export const isAdmin = async (req, res, next) => {
    try {
        const user = await Users.findOne({
            where: {
                email: req.user.email // Use req.user.email from the verifyToken middleware
            }
        });
        
        if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });
        
        if (user.roleID !== '1') return res.status(403).json({ msg: "Akses terlarang" });
        
        next();
    } catch (error) {
        return res.status(500).json({ msg: "Terjadi kesalahan server", error: error.message });
    }
};
