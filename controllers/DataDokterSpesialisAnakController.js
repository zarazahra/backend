import DataDokterSpesialisAnakModel from "../models/DataDokterSpesialisAnakModel.js";
import db from "../config/Database.js";


export const getDataDokterSpesialisAnak = async(req, res) =>{
    try {
        const response = await DataDokterSpesialisAnakModel.findAll({
            attributes:['uuid', 'no','gambarFoto', 'namaDokter','spesialis'],
        })
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}


export const getDataDokterSpesialisAnakById = async(req, res) =>{
    try {
        const response = await DataDokterSpesialisAnakModel.findOne({
            attributes:['uuid', 'no','gambarFoto', 'namaDokter','spesialis'],
            where:{
                uuid:req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}

export const getCountDokter = async(req, res) => {
    try {
        const response = await db.query(`SELECT COUNT(*) as totalDokter FROM datadokter`)
    res.status(200).json(response[0]);
    } catch (error) {
        res.status(500).json({msg:error.message});
    }
    
}

//done
export const createDataDokterSpesialisAnak = async(req, res) =>{
    const {no,gambarFoto, namaDokter,spesialis} = req.body;
        try {
            await DataDokterSpesialisAnakModel.create({
                no:no,
                gambarFoto:gambarFoto,
                namaDokter:namaDokter,
                spesialis: spesialis,
            });
            res.status(201).json({msg: "Register Berhasil"});
        } catch (error) {
            res.status(400).json({msg: error.message});
    }
}
//done
export const updateDataDokterSpesialisAnak = async(req, res) =>{
    const dataDokter = await DataDokterSpesialisAnakModel.findOne({
        where:{
            uuid:req.params.id
        }
    });
    if(!dataDokter) return res.status(404).json({msg:"Data Dokter Tidak Di temukan"});
    const {no,gambarFoto, namaDokter,spesialis} = req.body;
    try {
        await DataDokterSpesialisAnakModel.update({
            no:no,
            gambarFoto:gambarFoto,
            namaDokter:namaDokter,
            spesialis: spesialis,
            
        },{
            where: {
                uuid : dataDokter.uuid
            }
        });
        res.status(200).json({msg: "Update Berhasil"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}
//done
export const deleteDataDokterSpesialisAnak = async(req, res) =>{
    const dataDokter = await DataDokterSpesialisAnakModel.findOne({
        where:{
            uuid:req.params.id
        }
    });
    if(!dataDokter) return res.status(404).json({msg:"Data Dokter Tidak Di temukan"});
    try {
        await DataDokterSpesialisAnakModel.destroy({
            where: {
                id : dataDokter.id
            }
        });
        res.status(200).json({msg: "Data Dokter Berhasil delete"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}