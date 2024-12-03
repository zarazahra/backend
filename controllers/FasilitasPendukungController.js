import FasilitasPendukungModel from "../models/FasilitasPendukungModel.js";

export const getFasilitasPendukung = async (req, res) => {
    try {
        const response = await FasilitasPendukungModel.findAll({
            attributes: ['uuid', 'judul', 'deskripsi', 'image'],
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

export const getFasilitasPendukungById = async (req, res) => {
    try {
        const response = await FasilitasPendukungModel.findOne({
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

export const createFasilitasPendukung = async (req, res) => {
    const { judul, deskripsi, image } = req.body;
    try {
        await FasilitasPendukungModel.create({
            judul: judul,
            deskripsi: deskripsi,
            image: image,
        });
        res.status(201).json({ msg: "Register Berhasil" });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};

export const updateFasilitasPendukung = async (req, res) => {
    const fasilitasPendukung = await FasilitasPendukungModel.findOne({
        where: {
            uuid: req.params.id
        }
    });
    if (!fasilitasPendukung) return res.status(404).json({ msg: "Fasilitas Pendukung Tidak Ditemukan" });
    const { judul, deskripsi, image } = req.body;
    try {
        await FasilitasPendukungModel.update({
            judul: judul,
            deskripsi: deskripsi,
            image: image,
        }, {
            where: {
                uuid: fasilitasPendukung.uuid
            }
        });
        res.status(200).json({ msg: "Update Berhasil" });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};

export const deleteFasilitasPendukung = async (req, res) => {
    const fasilitasPendukung = await FasilitasPendukungModel.findOne({
        where: {
            uuid: req.params.id
        }
    });
    if (!fasilitasPendukung) return res.status(404).json({ msg: "Fasilitas Pendukung Tidak Ditemukan" });
    try {
        await FasilitasPendukungModel.destroy({
            where: {
                uuid: fasilitasPendukung.uuid
            }
        });
        res.status(200).json({ msg: "Fasilitas Pendukung Berhasil Dihapus" });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};
