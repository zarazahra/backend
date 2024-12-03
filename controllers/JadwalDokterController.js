import JadwalDokterModel from "../models/JadwalDokterModel.js";


export const getJadwalDokter = async(req, res) =>{
    try {
        const response = await JadwalDokterModel.findAll({
            attributes:['uuid', 'namaDokter','spesialis', 'senin','selasa','rabu','kamis', 'jumat', 'sabtu', 'minggu', 'aktif'],
        })
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}


export const getJadwalDokterById = async(req, res) =>{
    try {
        const response = await JadwalDokterModel.findOne({
            attributes:['uuid', 'namaDokter','spesialis', 'senin','selasa','rabu','kamis', 'jumat', 'sabtu', 'minggu', 'aktif'],
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
export const createJadwalDokter = async(req, res) =>{
    const {namaDokter,spesialis, senin,selasa,rabu,kamis, jumat, sabtu, minggu, aktif} = req.body;
        try {
            await JadwalDokterModel.create({
                namaDokter:namaDokter,
                spesialis:spesialis,
                senin:senin,
                selasa: selasa,
                rabu:rabu,
                kamis: kamis,
                jumat: jumat,
                sabtu: sabtu,
                minggu: minggu,
                aktif: aktif,
            });
            res.status(201).json({msg: "Register Berhasil"});
        } catch (error) {
            res.status(400).json({msg: error.message});
    }
}
//done
export const updateJadwalDokter = async(req, res) =>{
    const managemen = await JadwalDokterModel.findOne({
        where:{
            uuid:req.params.id
        }
    });
    if(!managemen) return res.status(404).json({msg:"Managemen Tidak Di temukan"});
    const {namaDokter,spesialis, senin,selasa,rabu,kamis, jumat, sabtu, minggu, aktif} = req.body;
    try {
        await JadwalDokterModel.update({
            namaDokter:namaDokter,
            spesialis:spesialis,
            senin:senin,
            selasa: selasa,
            rabu:rabu,
            kamis: kamis,
            jumat: jumat,
            sabtu: sabtu,
            minggu: minggu,
            aktif: aktif,
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

export const deleteJadwalDokter = async(req, res) =>{
    const managemen = await JadwalDokterModel.findOne({
        where:{
            uuid:req.params.id
        }
    });
    if(!managemen) return res.status(404).json({msg:"managemen Tidak Di temukan"});
    try {
        await JadwalDokterModel.destroy({
            where: {
                id : managemen.id
            }
        });
        res.status(200).json({msg: "managemen Berhasil delete"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}