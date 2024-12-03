import LaborModel from "../models/LaborModel.js";
import db from "../config/Database.js";


export const getDataLabor = async(req, res) =>{
    try {
        const response = await LaborModel.findAll({
            attributes:['uuid', 'gambarFoto', 'namaLabor'],
        })
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}


export const getDataLaborById = async(req, res) =>{
    try {
        const response = await LaborModel.findOne({
            attributes:['uuid', 'gambarFoto', 'namaLabor'],
            where:{
                uuid:req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}

export const getCountLabor = async(req, res) => {
    try {
        const response = await db.query(`SELECT COUNT(*) as totalLabor FROM dataLabor`)
    res.status(200).json(response[0]);
    } catch (error) {
        res.status(500).json({msg:error.message});
    }
    
}

//done
export const createDataLabor = async(req, res) =>{
    const {gambarFoto, namaLabor} = req.body;
        try {
            await LaborModel.create({
               
                gambarFoto:gambarFoto,
                namaLabor:namaLabor,
               
            });
            res.status(201).json({msg: "Berhasil"});
        } catch (error) {
            res.status(400).json({msg: error.message});
    }
}
//done
export const updateDataLabor = async(req, res) =>{
    const dataLabor = await LaborModel.findOne({
        where:{
            uuid:req.params.id
        }
    });
    if(!dataLabor) return res.status(404).json({msg:"Data Labor Tidak Di temukan"});
    const {gambarFoto, namaLabor} = req.body;
    try {
        await LaborModel.update({
           
            gambarFoto:gambarFoto,
            namaLabor:namaLabor,
           
        },{
            where: {
                uuid : dataLabor.uuid
            }
        });
        res.status(200).json({msg: "Update Berhasil"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}
//done
export const deleteDataLabor = async(req, res) =>{
    const dataLabor = await LaborModel.findOne({
        where:{
            uuid:req.params.id
        }
    });
    if(!dataLabor) return res.status(404).json({msg:"Data Labor Tidak Di temukan"});
    try {
        await LaborModel.destroy({
            where: {
                id : dataLabor.id
            }
        });
        res.status(200).json({msg: "Data Labor Berhasil delete"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}