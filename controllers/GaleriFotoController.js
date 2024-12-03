import GaleriFotoModel from "../models/GaleriFotoModel.js";


export const getGaleriFoto = async(req, res) =>{
    try {
        const response = await GaleriFotoModel.findAll({
            attributes:['uuid', 'no','gambarFoto', 'judulFoto','album'],
        })
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}


export const getGaleriFotoById = async(req, res) =>{
    try {
        const response = await GaleriFotoModel.findOne({
            attributes:['uuid', 'no','gambarFoto', 'judulFoto','album'],
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
export const createGaleriFoto = async(req, res) =>{
    const {no,gambarFoto, judulFoto,album} = req.body;
        try {
            await GaleriFotoModel.create({
                no:no,
                gambarFoto:gambarFoto,
                judulFoto:judulFoto,
                album: album,
            });
            res.status(201).json({msg: "Register Berhasil"});
        } catch (error) {
            res.status(400).json({msg: error.message});
    }
}
//done
export const updateGaleriFoto = async(req, res) =>{
    const galeriFoto = await GaleriFotoModel.findOne({
        where:{
            uuid:req.params.id
        }
    });
    if(!galeriFoto) return res.status(404).json({msg:"Galeri Foto Tidak Di temukan"});
    const {no,gambarFoto, judulFoto,album} = req.body;
    try {
        await GaleriFotoModel.update({
            no:no,
            gambarFoto:gambarFoto,
            judulFoto:judulFoto,
            album: album,
            
        },{
            where: {
                uuid : galeriFoto.uuid
            }
        });
        res.status(200).json({msg: "Update Berhasil"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}
//done
export const deleteGaleriFoto = async(req, res) =>{
    const galeriFoto = await GaleriFotoModel.findOne({
        where:{
            uuid:req.params.id
        }
    });
    if(!galeriFoto) return res.status(404).json({msg:"galeriFoto Tidak Di temukan"});
    try {
        await GaleriFotoModel.destroy({
            where: {
                id : galeriFoto.id
            }
        });
        res.status(200).json({msg: "galeriFoto Berhasil delete"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}