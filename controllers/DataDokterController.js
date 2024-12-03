import DataDokterModel from "../models/DataDokterModel.js";
import db from "../config/Database.js";


export const getDataDokter = async(req, res) =>{
    try {
        const response = await DataDokterModel.findAll({
            attributes:['uuid', 'no','gambarFoto', 'namaDokter','spesialis'],
        })
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}


export const getDataDokterById = async(req, res) =>{
    try {
        const response = await DataDokterModel.findOne({
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
export const createDataDokter = async(req, res) =>{
    const {no,gambarFoto, namaDokter,spesialis} = req.body;
        try {
            await DataDokterModel.create({
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
export const updateDataDokter = async(req, res) =>{
    const dataDokter = await DataDokterModel.findOne({
        where:{
            uuid:req.params.id
        }
    });
    if(!dataDokter) return res.status(404).json({msg:"Data Dokter Tidak Di temukan"});
    const {no,gambarFoto, namaDokter,spesialis} = req.body;
    try {
        await DataDokterModel.update({
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
export const deleteDataDokter = async(req, res) =>{
    const dataDokter = await DataDokterModel.findOne({
        where:{
            uuid:req.params.id
        }
    });
    if(!dataDokter) return res.status(404).json({msg:"Data Dokter Tidak Di temukan"});
    try {
        await DataDokterModel.destroy({
            where: {
                id : dataDokter.id
            }
        });
        res.status(200).json({msg: "Data Dokter Berhasil delete"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}