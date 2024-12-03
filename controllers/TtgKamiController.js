import TtgKamiModel from "../models/TtgKamiModel.js";


export const getTtgKami = async(req, res) =>{
    try {
        const response = await TtgKamiModel.findAll({
            attributes:['uuid', 'judul','deskripsiTtgKami'],
        })
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}


export const getTtgKamiById = async(req, res) =>{
    try {
        const response = await TtgKamiModel.findOne({
            attributes:['uuid', 'judul','deskripsiTtgKami'],
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
export const createTtgKami = async(req, res) =>{
    const {judul,deskripsiTtgKami} = req.body;
        try {
            await TtgKamiModel.create({
                judul:judul,
                deskripsiTtgKami:deskripsiTtgKami,
            });
            res.status(201).json({msg: "Register Berhasil"});
        } catch (error) {
            res.status(400).json({msg: error.message});
    }
}
//done
export const updateTtgKami = async(req, res) =>{
    const ttgKami = await TtgKamiModel.findOne({
        where:{
            uuid:req.params.id
        }
    });
    if(!ttgKami) return res.status(404).json({msg:"Data Spesialis Tidak Di temukan"});
    const {judul,deskripsiTtgKami} = req.body;
    try {
        await TtgKamiModel.update({
            judul:judul,
            deskripsiTtgKami:deskripsiTtgKami,
           
            
        },{
            where: {
                uuid : ttgKami.uuid
            }
        });
        res.status(200).json({msg: "Update Berhasil"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}
//done
export const deleteTtgKami = async(req, res) =>{
    const ttgKami = await TtgKamiModel.findOne({
        where:{
            uuid:req.params.id
        }
    });
    if(!ttgKami) return res.status(404).json({msg:"Data Spesialis Tidak Di temukan"});
    //console.log(ttgKami.uuid + "ini adalah tentang kami yaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
    try {
        await TtgKamiModel.destroy({
            where: {
                uuid : ttgKami.uuid
            }
        });
        res.status(200).json({msg: "Data Spesialis Berhasil delete"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}