import JadwalPoliPsikologModel from "../models/JadwalPoliPsikologModel.js";


export const getJadwalPoliPsikolog = async(req, res) =>{
    try {
        const response = await JadwalPoliPsikologModel.findAll({
            attributes:['uuid', 'nama', 'senin','selasa','rabu','kamis', 'jumat', 'sabtu', 'minggu'],
        })
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}


export const getJadwalPoliPsikologById = async(req, res) =>{
    try {
        const response = await JadwalPoliPsikologModel.findOne({
            attributes:['uuid', 'nama', 'senin','selasa','rabu','kamis', 'jumat', 'sabtu', 'minggu'],
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
export const createJadwalPoliPsikolog = async(req, res) =>{
    const {nama,senin,selasa,rabu,kamis, jumat, sabtu, minggu} = req.body;
        try {
            await JadwalPoliPsikologModel.create({
                nama:nama,
                senin:senin,
                selasa: selasa,
                rabu:rabu,
                kamis: kamis,
                jumat: jumat,
                sabtu: sabtu,
                minggu: minggu,
               
            });
            res.status(201).json({msg: "Register Berhasil"});
        } catch (error) {
            res.status(400).json({msg: error.message});
    }
}
//done
export const updateJadwalPoliPsikolog = async(req, res) =>{
    const jadwalPoliPsikolog = await JadwalPoliPsikologModel.findOne({
        where:{
            uuid:req.params.id
        }
    });
    if(!jadwalPoliPsikolog) return res.status(404).json({msg:"Jadwal Poli Psikolog Tidak Di temukan"});
    const {nama, senin,selasa,rabu,kamis, jumat, sabtu, minggu} = req.body;
    try {
        await JadwalPoliPsikologModel.update({
            nama:nama,
            senin:senin,
            selasa: selasa,
            rabu:rabu,
            kamis: kamis,
            jumat: jumat,
            sabtu: sabtu,
            minggu: minggu,
           
        },{
            where: {
                uuid : jadwalPoliPsikolog.uuid
            }
        });
        res.status(200).json({msg: "Update Berhasil"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const deleteJadwalPoliPsikolog = async(req, res) =>{
    const jadwalPoliPsikolog = await JadwalPoliPsikologModel.findOne({
        where:{
            uuid:req.params.id
        }
    });
    if(!jadwalPoliPsikolog) return res.status(404).json({msg:"Jadwal Poli Psikolog Tidak Di temukan"});
    try {
        await JadwalPoliPsikologModel.destroy({
            where: {
                id : jadwalPoliPsikolog.id
            }
        });
        res.status(200).json({msg:"Jadwal Poli Psikolog Berhasil delete"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}