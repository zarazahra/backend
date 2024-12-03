import RawatInapModel from "../models/RawatInapModel.js";

export const getRawatInap = async (req, res) => {
    try {
        const response = await RawatInapModel.findAll({
            attributes: ['uuid', 'judul', 'deskripsi', 'image'],
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

export const getRawatInapById = async (req, res) => {
    try {
        const response = await RawatInapModel.findOne({
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

export const createRawatInap = async (req, res) => {
    const { judul, deskripsi, image } = req.body;
    try {
        await RawatInapModel.create({
            judul: judul,
            deskripsi: deskripsi,
            image: image,
        });
        res.status(201).json({ msg: "Register Berhasil" });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};

export const updateRawatInap = async (req, res) => {
    const rawatInap = await RawatInapModel.findOne({
        where: {
            uuid: req.params.id
        }
    });
    if (!rawatInap) return res.status(404).json({ msg: "Rawat Inap Tidak Ditemukan" });
    const { judul, deskripsi, image } = req.body;
    try {
        await RawatInapModel.update({
            judul: judul,
            deskripsi: deskripsi,
            image: image,
        }, {
            where: {
                uuid: rawatInap.uuid
            }
        });
        res.status(200).json({ msg: "Update Berhasil" });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};

export const deleteRawatInap = async (req, res) => {
    const rawatInap = await RawatInapModel.findOne({
        where: {
            uuid: req.params.id
        }
    });
    if (!rawatInap) return res.status(404).json({ msg: "Rawat Inap Tidak Ditemukan" });
    try {
        await RawatInapModel.destroy({
            where: {
                uuid: rawatInap.uuid
            }
        });
        res.status(200).json({ msg: "Rawat Inap Berhasil Dihapus" });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};
