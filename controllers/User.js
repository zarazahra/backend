import Users from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const getUsers = async (req, res) => {
    try {
        const users = await Users.findAll({
            attributes: ['uuid', 'name', 'email', 'roleID']
        });
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Gagal mengambil data pengguna" });
    }
}

export const Register = async (req, res) => {
    const { name, email, password, roleID, confPassword } = req.body;
    if (password !== confPassword) return res.status(400).json({ msg: "Password dan Confirm Password tidak cocok" });
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    try {
        await Users.create({
            name,
            email,
            password: hashPassword,
            roleID
        });
        res.status(201).json({ msg: "Registrasi Berhasil" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Registrasi Gagal" });
    }
}

export const Login = async (req, res) => {
    try {
        const user = await Users.findOne({
            where: {
                email: req.body.email
            }
        });
        if (!user) return res.status(404).json({ msg: "Email tidak ditemukan" });

        const match = await bcrypt.compare(req.body.password, user.password);
        if (!match) return res.status(400).json({ msg: "Password salah" });

        const userId = user.uuid;
        const name = user.name;
        const email = user.email;
        const roleID = user.roleID;
        const accessToken = jwt.sign({ userId, name, email, roleID }, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: '20s'
        });
        const refreshToken = jwt.sign({ userId, name, email, roleID }, process.env.REFRESH_TOKEN_SECRET, {
            expiresIn: '1d'
        });
        await Users.update({ refresh_token: refreshToken }, {
            where: {
                uuid: userId
            }
        });
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000 // 1 hari
        });
        res.json({ accessToken });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Login Gagal" });
    }
}

export const Logout = async (req, res) => {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.sendStatus(204);
    const user = await Users.findOne({
        where: {
            refresh_token: refreshToken
        }
    });
    if (!user) return res.sendStatus(204);
    const userId = user.uuid;
    await Users.update({ refresh_token: null }, {
        where: {
            uuid: userId
        }
    });
    res.clearCookie('refreshToken');
    return res.sendStatus(200);
}

export const Delete = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await Users.findOne({ where: { uuid: id } });
        if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });

        await Users.destroy({ where: { uuid: id } });
        res.json({ msg: "User berhasil dihapus" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Gagal menghapus user" });
    }
};

export const updateUser = async (req, res) => {
    const { name, email, password, roleID } = req.body;

    try {
        const user = await Users.findOne({
            where: {
                uuid: req.params.id
            }
        });

        if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });

        // Update password only if provided, otherwise keep existing password
        let hashPassword = user.password;
        if (password) {
            const salt = await bcrypt.genSalt();
            hashPassword = await bcrypt.hash(password, salt);
        }

        await Users.update({
            name: name || user.name,
            email: email || user.email,
            password: hashPassword,
            roleID: roleID || user.roleID
        }, {
            where: {
                uuid: user.uuid
            }
        });

        res.status(200).json({ msg: "Update Berhasil" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Gagal memperbarui data user" });
    }
}

