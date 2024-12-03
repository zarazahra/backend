import Users from "../models/UserModel.js";

export const isAdmin = async (req, res, next) => {
    try {
        const user = await Users.findOne({
            where: {
                id: req.userId
            }
        });
        console.log(user.roleID)
        if (!user || user.roleID !== '1') {
            return res.status(403).json({ msg: "Akses ditolak, hanya admin yang dapat mengakses" });
        }
        next();
    } catch (error) {
        res.status(500).json({ msg: "Internal Server Error" });
    }
};