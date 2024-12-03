import CarouselModel from "../models/CarouselModel.js";


export const getCarousel = async(req, res) =>{
    try {
        const response = await CarouselModel.findAll({
            attributes:['uuid', 'judulSlide','deskripsiSlide'],
        })
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}


export const getCarouselById = async(req, res) =>{
    try {
        const response = await CarouselModel.findOne({
            attributes:['uuid', 'judulSlide','deskripsiSlide'],
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
export const createCarousel = async(req, res) =>{
    const {judulSlide,deskripsiSlide} = req.body;
        try {
            await CarouselModel.create({
                judulSlide:judulSlide,
                deskripsiSlide:deskripsiSlide,
            });
            res.status(201).json({msg: "Register Berhasil"});
        } catch (error) {
            res.status(400).json({msg: error.message});
    }
}
//done
export const updateCarousel = async(req, res) =>{
    const carousel = await CarouselModel.findOne({
        where:{
            uuid:req.params.id
        }
    });
    if(!carousel) return res.status(404).json({msg:"Data Tidak Di temukan"});
    const {judulSlide,deskripsiSlide} = req.body;
    try {
        await CarouselModel.update({
            judulSlide:judulSlide,
            deskripsiSlide:deskripsiSlide,
            
        },{
            where: {
                uuid : carousel.uuid
            }
        });
        res.status(200).json({msg: "Update Berhasil"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}
//done
export const deleteCarousel = async(req, res) =>{
    const carousel = await CarouselModel.findOne({
        where:{
            uuid:req.params.id
        }
    });
    if(!carousel) return res.status(404).json({msg:"Data Tidak di temukan"});
    try {
        await CarouselModel.destroy({
            where: {
                uuid : carousel.id
            }
        });
        res.status(200).json({msg: "Data Berhasil di delete"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}