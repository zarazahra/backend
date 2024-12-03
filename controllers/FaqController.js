import FaqModel from "../models/FaqModel.js";


export const getFaq = async(req, res) =>{
    try {
        const response = await FaqModel.findAll({
            attributes:['uuid', 'pertanyaan','jawaban'],
        })
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}


export const getFaqById = async(req, res) =>{
    try {
        const response = await FaqModel.findOne({
            attributes:['uuid', 'pertanyaan','jawaban'],
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
export const createFaq = async(req, res) =>{
    const {pertanyaan,jawaban} = req.body;
        try {
            await FaqModel.create({
                pertanyaan:pertanyaan,
                jawaban:jawaban,
            });
            res.status(201).json({msg: "Register Berhasil"});
        } catch (error) {
            res.status(400).json({msg: error.message});
    }
}
//done
export const updateFaq = async(req, res) =>{
    const faq = await FaqModel.findOne({
        where:{
            uuid:req.params.id
        }
    });
    if(!faq) return res.status(404).json({msg:"Data Spesialis Tidak Di temukan"});
    const {pertanyaan,jawaban} = req.body;
    try {
        await FaqModel.update({
            pertanyaan:pertanyaan,
            jawaban:jawaban,
           
            
        },{
            where: {
                uuid : faq.uuid
            }
        });
        res.status(200).json({msg: "Update Berhasil"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}
//done
export const deleteFaq = async(req, res) =>{
    const faq = await FaqModel.findOne({
        where:{
            uuid:req.params.id
        }
    });
    if(!faq) return res.status(404).json({msg:"Data Spesialis Tidak Di temukan"});
    try {
        await FaqModel.destroy({
            where: {
                uuid : faq.uuid
            }
        });
        res.status(200).json({msg: "Data Spesialis Berhasil delete"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}