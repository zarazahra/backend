import SpesialisModel from "../models/SpesialisModel.js";

export const getSpesialis = async (req, res) => {
    try {
        const response = await SpesialisModel.findAll({
            attributes: ['id', 'name_Spesialis'],
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

export const getSpesialisById = async (req, res) => {
    try {
        const response = await SpesialisModel.findOne({
            attributes: ['id', 'name_Spesialis'],
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

export const createSpesialis = async (req, res) => {
    const { name_Spesialis } = req.body;
    try {
        await SpesialisModel.create({
            name_Spesialis: name_Spesialis,
        });
        res.status(201).json({ msg: "Spesialis baru berhasil ditambahkan" });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};

export const updateSpesialis = async (req, res) => {
    const spesialis = await SpesialisModel.findOne({
        where: {
            id: req.params.id
        }
    });
    if (!spesialis) return res.status(404).json({ msg: "Spesialis Tidak Ditemukan" });

    const { name_Spesialis } = req.body;
    try {
        await SpesialisModel.update({
            name_Spesialis: name_Spesialis,
        }, {
            where: {
                id: spesialis.id
            }
        });
        res.status(200).json({ msg: "Spesialis berhasil diupdate" });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};

export const deleteSpesialis = async (req, res) => {
    const spesialis = await SpesialisModel.findOne({
        where: {
            id: req.params.id
        }
    });
    if (!spesialis) return res.status(404).json({ msg: "Spesialis Tidak Ditemukan" });

    try {
        await SpesialisModel.destroy({
            where: {
                id: spesialis.id
            }
        });
        res.status(200).json({ msg: "Spesialis Berhasil Dihapus" });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};
