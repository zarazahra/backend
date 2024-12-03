import LayananPenunjangModel from "../models/LayananPenunjangModel.js";

export const getLayananPenunjang = async (req, res) => {
    try {
        const response = await LayananPenunjangModel.findAll({
            attributes: ['uuid', 'judul', 'deskripsi', 'image'],
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

export const getLayananPenunjangById = async (req, res) => {
    try {
        const response = await LayananPenunjangModel.findOne({
            attributes: ['uuid', 'judul', 'deskripsi', 'image'],
            where: {
                uuid: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

export const createLayananPenunjang = async (req, res) => {
    const { judul, deskripsi, image } = req.body;
    try {
        await LayananPenunjangModel.create({
            judul: judul,
            deskripsi: deskripsi,
            image: image,
        });
        res.status(201).json({ msg: "Register Berhasil" });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};

export const updateLayananPenunjang = async (req, res) => {
    const layananPenunjang = await LayananPenunjangModel.findOne({
        where: {
            uuid: req.params.id
        }
    });
    if (!layananPenunjang) return res.status(404).json({ msg: "Fasilitas Pendukung Tidak Ditemukan" });
    const { judul, deskripsi, image } = req.body;
    try {
        await LayananPenunjangModel.update({
            judul: judul,
            deskripsi: deskripsi,
            image: image,
        }, {
            where: {
                uuid: layananPenunjang.uuid
            }
        });
        res.status(200).json({ msg: "Update Berhasil" });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};

export const deleteLayananPenunjang = async (req, res) => {
    const layananPenunjang = await LayananPenunjangModel.findOne({
        where: {
            uuid: req.params.id
        }
    });
    if (!layananPenunjang) return res.status(404).json({ msg: "Fasilitas Pendukung Tidak Ditemukan" });
    try {
        await LayananPenunjangModel.destroy({
            where: {
                uuid: layananPenunjang.uuid
            }
        });
        res.status(200).json({ msg: "Fasilitas Pendukung Berhasil Dihapus" });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};
