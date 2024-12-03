import JadwalPoliFisioterapiModel from "../models/JadwalPoliFisioterapiModel.js";


export const getJadwalPoliFisioterapi = async(req, res) =>{
    try {
        const response = await JadwalPoliFisioterapiModel.findAll({
            attributes:['uuid', 'nama', 'senin','selasa','rabu','kamis', 'jumat', 'sabtu', 'minggu'],
        })
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}


export const getJadwalPoliFisioterapiById = async(req, res) =>{
    try {
        const response = await JadwalPoliFisioterapiModel.findOne({
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
export const createJadwalPoliFisioterapi = async(req, res) =>{
    const {nama,senin,selasa,rabu,kamis, jumat, sabtu, minggu} = req.body;
        try {
            await JadwalPoliFisioterapiModel.create({
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
export const updateJadwalPoliFisioterapi = async(req, res) =>{
    const jadwalPoliFisioterapi = await JadwalPoliFisioterapiModel.findOne({
        where:{
            uuid:req.params.id
        }
    });
    if(!jadwalPoliFisioterapi) return res.status(404).json({msg:"Jadwal Poli Psikolog Tidak Di temukan"});
    const {nama, senin,selasa,rabu,kamis, jumat, sabtu, minggu} = req.body;
    try {
        await JadwalPoliFisioterapiModel.update({
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
                uuid : jadwalPoliFisioterapi.uuid
            }
        });
        res.status(200).json({msg: "Update Berhasil"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const deleteJadwalPoliFisioterapi = async(req, res) =>{
    const jadwalPoliFisioterapi = await JadwalPoliFisioterapiModel.findOne({
        where:{
            uuid:req.params.id
        }
    });
    if(!jadwalPoliFisioterapi) return res.status(404).json({msg:"Jadwal Poli Psikolog Tidak Di temukan"});
    try {
        await JadwalPoliFisioterapiModel.destroy({
            where: {
                id : jadwalPoliFisioterapi.id
            }
        });
        res.status(200).json({msg:"Jadwal Poli Psikolog Berhasil delete"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}