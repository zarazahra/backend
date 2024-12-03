import BeritaModel from "../models/BeritaModel.js";

export const getBerita = async (req, res) => {
    try {
        const response = await BeritaModel.findAll({
            attributes: ['uuid', 'judul', 'gambar', 'deskripsi'],
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

export const getBeritaById = async (req, res) => {
    try {
        const response = await BeritaModel.findOne({
            attributes: ['uuid', 'judul', 'gambar', 'deskripsi'],
            where: {
                uuid: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

//done
export const createBerita = async (req, res) => {
    const { judul, gambar, deskripsi } = req.body;
    try {
        await BeritaModel.create({
            judul: judul,
            gambar: gambar,
            deskripsi: deskripsi,
        });
        res.status(201).json({ msg: "Berita berhasil ditambahkan" });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};

//done
export const updateBerita = async (req, res) => {
    const berita = await BeritaModel.findOne({
        where: {
            uuid: req.params.id
        }
    });
    if (!berita) return res.status(404).json({ msg: "Berita tidak ditemukan" });
    const { judul, gambar, deskripsi } = req.body;
    try {
        await BeritaModel.update({
            judul: judul,
            gambar: gambar,
            deskripsi: deskripsi,
        }, {
            where: {
                uuid: berita.uuid
            }
        });
        res.status(200).json({ msg: "Berita berhasil diperbarui" });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};

//done
export const deleteBerita = async (req, res) => {
    const berita = await BeritaModel.findOne({
        where: {
            uuid: req.params.id
        }
    });
    if (!berita) return res.status(404).json({ msg: "Berita tidak ditemukan" });
    try {
        await BeritaModel.destroy({
            where: {
                uuid: berita.uuid
            }
        });
        res.status(200).json({ msg: "Berita berhasil dihapus" });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};
