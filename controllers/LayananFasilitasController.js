import LayananFasilitasModel from "../models/LayananFasilitasModel.js";


export const getLayananFasilitas = async(req, res) =>{
    try {
        const response = await LayananFasilitasModel.findAll({
            attributes:['uuid', 'judulLF','deskripsiLF'],
        })
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}


export const getLayananFasilitasById = async(req, res) =>{
    try {
        const response = await LayananFasilitasModel.findOne({
            attributes:['uuid', 'judulLF','deskripsiLF'],
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
export const createLayananFasilitas = async(req, res) =>{
    const {judulLF,deskripsiLF} = req.body;
        try {
            await LayananFasilitasModel.create({
                judulLF:judulLF,
                deskripsiLF:deskripsiLF,
            });
            res.status(201).json({msg: "Register Berhasil"});
        } catch (error) {
            res.status(400).json({msg: error.message});
    }
}
//done
export const updateLayananFasilitas = async(req, res) =>{
    const layananFasilitas = await LayananFasilitasModel.findOne({
        where:{
            uuid:req.params.id
        }
    });
    if(!layananFasilitas) return res.status(404).json({msg:"Layanan Tidak Di temukan"});
    const {judulLF,deskripsiLF} = req.body;
    try {
        await LayananFasilitasModel.update({
            judulLF:judulLF,
            deskripsiLF:deskripsiLF,
            
        },{
            where: {
                uuid : layananFasilitas.uuid
            }
        });
        res.status(200).json({msg: "Update Berhasil"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}
//done
export const deleteLayananFasilitas = async(req, res) =>{
    const layananFasilitas = await LayananFasilitasModel.findOne({
        where:{
            uuid:req.params.id
        }
    });
    if(!layananFasilitas) return res.status(404).json({msg:"Layanan & Fasilitas Tidak Di temukan"});
    try {
        await LayananFasilitasModel.destroy({
            where: {
                id : layananFasilitas.id
            }
        });
        res.status(200).json({msg: "Layanan & Fasilitas Berhasil delete"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}