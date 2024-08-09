import ModulMo from "../models/ModulModel.js";


export const getModul = async(req, res) =>{
    try {
        const response = await ModulMo.findAll({
            attributes:['uuid', 'namaModul','link', 'publish','aktif','status'],
        })
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}

export const getModulById = async(req, res) =>{
    try {
        const response = await ModulMo.findOne({
            attributes:['uuid', 'namaModul','link', 'publish','aktif','status'],
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
export const createModul = async(req, res) =>{
    const {namaModul,link, publish,aktif,status,} = req.body;
        try {
            await ModulMo.create({
                namaModul:namaModul,
                link:link,
                publish:publish,
                aktif: aktif,
                status:status,
            });
            res.status(201).json({msg: "Register Berhasil"});
        } catch (error) {
            res.status(400).json({msg: error.message});
    }
}
//done
export const updateModul = async(req, res) =>{
    const managemen = await ModulMo.findOne({
        where:{
            uuid:req.params.id
        }
    });
    if(!managemen) return res.status(404).json({msg:"Managemen Tidak Di temukan"});
    const {namaModul,link, publish,aktif,status,} = req.body;
    try {
        await ModulMo.update({
            namaModul:namaModul,
            link:link,
            publish:publish,
            aktif: aktif,
            status:status,
        },{
            where: {
                uuid : managemen.uuid
            }
        });
        res.status(200).json({msg: "Update Berhasil"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}
//done
export const deleteModul = async(req, res) =>{
    const managemen = await ModulMo.findOne({
        where:{
            uuid:req.params.id
        }
    });
    if(!managemen) return res.status(404).json({msg:"managemen Tidak Di temukan"});
    try {
        await ModulMo.destroy({
            where: {
                id : managemen.id
            }
        });
        res.status(200).json({msg: "managemen Berhasil delete"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}