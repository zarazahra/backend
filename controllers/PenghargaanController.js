import PenghargaanModel from "../models/PenghargaanModel.js";
import db from "../config/Database.js";


export const getPenghargaan = async(req, res) =>{
    try {
        const response = await PenghargaanModel.findAll({
            attributes:['uuid', 'gambarPenghargaan', 'namaPenghargaan'],
        })
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}


export const getPenghargaanById = async(req, res) =>{
    try {
        const response = await PenghargaanModel.findOne({
            attributes:['uuid', 'gambarPenghargaan', 'namaPenghargaan'],
            where:{
                uuid:req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}

export const getCountPenghargaan = async(req, res) => {
    try {
        const response = await db.query(`SELECT COUNT(*) as totalPenghargaan FROM penghargaan`)
    res.status(200).json(response[0]);
    } catch (error) {
        res.status(500).json({msg:error.message});
    }
    
}

//done
export const createPenghargaan = async(req, res) =>{
    const {gambarPenghargaan, namaPenghargaan} = req.body;
        try {
            await PenghargaanModel.create({
                gambarPenghargaan:gambarPenghargaan,
                namaPenghargaan:namaPenghargaan,
            });
            res.status(201).json({msg: "Register Berhasil"});
        } catch (error) {
            res.status(400).json({msg: error.message});
    }
}
//done
export const updatePenghargaan = async(req, res) =>{
    const penghargaan = await PenghargaanModel.findOne({
        where:{
            uuid:req.params.id
        }
    });
    if(!penghargaan) return res.status(404).json({msg:"Data Dokter Tidak Di temukan"});
    const {gambarPenghargaan, namaPenghargaan} = req.body;
    try {
        await DataDokterModel.update({
            gambarPenghargaan:gambarPenghargaan,
            namaPenghargaan:namaPenghargaan,            
        },{
            where: {
                uuid : penghargaan.uuid
            }
        });
        res.status(200).json({msg: "Update Berhasil"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}
//done
export const deletePenghargaan = async(req, res) =>{
    const penghargaan = await PenghargaanModel.findOne({
        where:{
            uuid:req.params.id
        }
    });
    if(!penghargaan) return res.status(404).json({msg:"Data Dokter Tidak Di temukan"});
    try {
        await PenghargaanModel.destroy({
            where: {
                id : penghargaan.id
            }
        });
        res.status(200).json({msg: "Data Dokter Berhasil delete"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}