import DataSpesialisModel from "../models/DataSpesialisModel.js";


export const getDataSpesialis = async(req, res) =>{
    try {
        const response = await DataSpesialisModel.findAll({
            attributes:['uuid', 'no','namaSpesialis', 'keterangan'],
        })
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}


export const getDataSpesialisById = async(req, res) =>{
    try {
        const response = await DataSpesialisModel.findOne({
            attributes:['uuid', 'no','namaSpesialis', 'keterangan'],
            where:{
                uuid:req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}

//done
export const createDataSpesialis = async(req, res) =>{
    const {no,namaSpesialis, keterangan,album} = req.body;
        try {
            await DataSpesialisModel.create({
                no:no,
                namaSpesialis:namaSpesialis,
                keterangan:keterangan,
               
            });
            res.status(201).json({msg: "Register Berhasil"});
        } catch (error) {
            res.status(400).json({msg: error.message});
    }
}
//done
export const updateDataSpesialis = async(req, res) =>{
    const dataSpesialis = await DataSpesialisModel.findOne({
        where:{
            uuid:req.params.id
        }
    });
    if(!dataSpesialis) return res.status(404).json({msg:"Data Spesialis Tidak Di temukan"});
    const {no,namaSpesialis, keterangan,album} = req.body;
    try {
        await DataSpesialisModel.update({
            no:no,
            namaSpesialis:namaSpesialis,
            keterangan:keterangan,
           
            
        },{
            where: {
                uuid : dataSpesialis.uuid
            }
        });
        res.status(200).json({msg: "Update Berhasil"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}
//done
export const deleteDataSpesialis = async(req, res) =>{
    const dataSpesialis = await DataSpesialisModel.findOne({
        where:{
            uuid:req.params.id
        }
    });
    if(!DataSpesialis) return res.status(404).json({msg:"Data Spesialis Tidak Di temukan"});
    try {
        await DataSpesialisModel.destroy({
            where: {
                id : dataSpesialis.id
            }
        });
        res.status(200).json({msg: "Data Spesialis Berhasil delete"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}