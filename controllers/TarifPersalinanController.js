import TarifPersalinanModel from "../models/TarifPersalinanModel.js";

export const getTarifPersalinan = async (req, res) => {
    try {
        const response = await TarifPersalinanModel.findAll({
            attributes: ['uuid', 'ruangPerawat', 'partusSpontanDokter', 'partusSpontanBidan', 'sectioCaesariaDokter'],
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

export const getTarifPersalinanById = async (req, res) => {
    try {
        const response = await TarifPersalinanModel.findOne({
            attributes: ['uuid', 'ruangPerawat', 'partusSpontanDokter', 'partusSpontanBidan', 'sectioCaesariaDokter'],
            where: {
                uuid: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

export const createTarifPersalinan = async (req, res) => {
    const { ruangPerawat, partusSpontanDokter, partusSpontanBidan, sectioCaesariaDokter} = req.body;
    try {
        await TarifPersalinanModel.create({
            ruangPerawat: ruangPerawat,
            partusSpontanDokter: partusSpontanDokter,
            partusSpontanBidan: partusSpontanBidan,
            sectioCaesariaDokter: sectioCaesariaDokter
        });
        res.status(201).json({ msg: "Register Berhasil" });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};

export const updateTarifPersalinan = async (req, res) => {
    const tarifPersalinan = await TarifPersalinanModel.findOne({
        where: {
            uuid: req.params.id
        }
    });
    if (!tarifPersalinan) return res.status(404).json({ msg: "Rawat Jalan Tidak Ditemukan" });
    const { ruangPerawat, partusSpontanDokter, partusSpontanBidan, sectioCaesariaDokter} = req.body;
    try {
        await TarifPersalinanModel.update({
            ruangPerawat: ruangPerawat,
            partusSpontanDokter: partusSpontanDokter,
            partusSpontanBidan: partusSpontanBidan,
            sectioCaesariaDokter: sectioCaesariaDokter
        }, {
            where: {
                uuid: tarifPersalinan.uuid
            }
        });
        res.status(200).json({ msg: "Update Berhasil" });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};

export const deleteTarifPersalinan = async (req, res) => {
    const tarifPersalinan = await TarifPersalinanModel.findOne({
        where: {
            uuid: req.params.id
        }
    });
    if (!tarifPersalinan) return res.status(404).json({ msg: "Rawat Jalan Tidak Ditemukan" });
    try {
        await TarifPersalinanModel.destroy({
            where: {
                uuid: tarifPersalinan.uuid
            }
        });
        res.status(200).json({ msg: "Rawat Jalan Berhasil Dihapus" });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};
