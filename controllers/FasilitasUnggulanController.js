import FasilitasUnggulanModel from "../models/FasilitasUnggulanModel.js";

export const getFasilitasUnggulan = async (req, res) => {
    try {
        const response = await FasilitasUnggulanModel.findAll({
            attributes: ['uuid', 'judul', 'subJudul', 'image'],
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

export const getFasilitasUnggulanById = async (req, res) => {
    try {
        const response = await FasilitasUnggulanModel.findOne({
            attributes: ['uuid', 'judul', 'subJudul', 'image'],
            where: {
                uuid: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

export const createFasilitasUnggulan = async (req, res) => {
    const { judul, subJudul, image } = req.body;
    try {
        await FasilitasUnggulanModel.create({
            judul: judul,
            subJudul: subJudul,
            image: image,
        });
        res.status(201).json({ msg: "Register Berhasil" });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};

export const updateFasilitasUnggulan = async (req, res) => {
    const fasilitasUnggulan = await FasilitasUnggulanModel.findOne({
        where: {
            uuid: req.params.id
        }
    });
    if (!fasilitasUnggulan) return res.status(404).json({ msg: "Fasilitas Unggulan Tidak Ditemukan" });
    const { judul, subJudul, image } = req.body;
    try {
        await FasilitasUnggulanModel.update({
            judul: judul,
            subJudul: subJudul,
            image: image,
        }, {
            where: {
                uuid: fasilitasUnggulan.uuid
            }
        });
        res.status(200).json({ msg: "Update Berhasil" });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};

export const deleteFasilitasUnggulan = async (req, res) => {
    const fasilitasUnggulan = await FasilitasUnggulanModel.findOne({
        where: {
            uuid: req.params.id
        }
    });
    if (!fasilitasUnggulan) return res.status(404).json({ msg: "Fasilitas Unggulan Tidak Ditemukan" });
    try {
        await FasilitasUnggulanModel.destroy({
            where: {
                uuid: fasilitasUnggulan.uuid
            }
        });
        res.status(200).json({ msg: "Fasilitas Unggulan Berhasil Dihapus" });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};
