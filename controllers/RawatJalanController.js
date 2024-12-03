import RawatJalanModel from "../models/RawatJalanModel.js";

export const getRawatJalan = async (req, res) => {
    try {
        const response = await RawatJalanModel.findAll({
            attributes: ['uuid', 'judul', 'deskripsi'],
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

export const getRawatJalanById = async (req, res) => {
    try {
        const response = await RawatJalanModel.findOne({
            attributes: ['uuid', 'judul', 'deskripsi'],
            where: {
                uuid: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

export const createRawatJalan = async (req, res) => {
    const { judul, deskripsi} = req.body;
    try {
        await RawatJalanModel.create({
            judul: judul,
            deskripsi: deskripsi,
           
        });
        res.status(201).json({ msg: "Register Berhasil" });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};

export const updateRawatJalan = async (req, res) => {
    const rawatJalan = await RawatJalanModel.findOne({
        where: {
            uuid: req.params.id
        }
    });
    if (!rawatJalan) return res.status(404).json({ msg: "Rawat Jalan Tidak Ditemukan" });
    const { judul, deskripsi} = req.body;
    try {
        await RawatJalanModel.update({
            judul: judul,
            deskripsi: deskripsi,
           
        }, {
            where: {
                uuid: rawatJalan.uuid
            }
        });
        res.status(200).json({ msg: "Update Berhasil" });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};

export const deleteRawatJalan = async (req, res) => {
    const rawatJalan = await RawatJalanModel.findOne({
        where: {
            uuid: req.params.id
        }
    });
    if (!rawatJalan) return res.status(404).json({ msg: "Rawat Jalan Tidak Ditemukan" });
    try {
        await RawatJalanModel.destroy({
            where: {
                uuid: rawatJalan.uuid
            }
        });
        res.status(200).json({ msg: "Rawat Jalan Berhasil Dihapus" });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};
