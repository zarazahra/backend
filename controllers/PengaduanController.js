import PengaduanModel from "../models/PengaduanModel.js";


export const getPengaduan = async(req, res) =>{
    try {
        const response = await PengaduanModel.findAll({
            attributes:['uuid', 'no', 'nama','email', 'nohp','kualitas','tanggal'],
        })
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}


export const getPengaduanById = async(req, res) =>{
    try {
        const response = await PengaduanModel.findOne({
            attributes:['uuid', 'no', 'nama','email', 'nohp','kualitas','tanggal'],
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
export const createPengaduan = async(req, res) =>{
    const {no, nama,email, nohp,kualitas,tanggal} = req.body;
        try {
            await PengaduanModel.create({
                no:no,
                nama:nama,
                email:email,
                nohp:nohp,
                kualitas: kualitas,
                tanggal:tanggal,
            });
            res.status(201).json({msg: "Register Berhasil"});
        } catch (error) {
            res.status(400).json({msg: error.message});
    }
}
//done
export const updatePengaduan = async(req, res) =>{
    const pengaduan = await PengaduanModel.findOne({
        where:{
            uuid:req.params.id
        }
    });
    if(!pengaduan) return res.status(404).json({msg:"Pengaduan Tidak Di temukan"});
    const {no, nama,email, nohp,kualitas,tanggal} = req.body;
    try {
        await PengaduanModel.update({
                no:no,
                nama:nama,
                email:email,
                nohp:nohp,
                kualitas: kualitas,
                tanggal:tanggal,
        },{
            where: {
                uuid : pengaduan.uuid
            }
        });
        res.status(200).json({msg: "Update Berhasil"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}
//done
export const deletePengaduan = async(req, res) =>{
    const pengaduan= await PengaduanModel.findOne({
        where:{
            uuid:req.params.id
        }
    });
    if(!pengaduan) return res.status(404).json({msg:"Pengaduan Tidak Di temukan"});
    try {
        await PengaduanModel.destroy({
            where: {
                id : berita.id
            }
        });
        res.status(200).json({msg: "Pengaduan Berhasil delete"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}