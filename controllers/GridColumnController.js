import GridColumnModel from "../models/GridColumnModel.js";


export const getGridColumn = async(req, res) =>{
    try {
        const response = await GridColumnModel.findAll({
            attributes:['uuid', 'judulGrid','shortText', 'longText'],
        })
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}


export const getGridColumnById = async(req, res) =>{
    try {
        const response = await GridColumnModel.findOne({
            attributes:['uuid', 'judulGrid','shortText', 'longText'],
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
export const createGridColumn = async(req, res) =>{
    const {judulGrid,shortText, longText,album} = req.body;
        try {
            await GridColumnModel.create({
                judulGrid:judulGrid,
                shortText:shortText,
                longText:longText,
               
            });
            res.status(201).json({msg: "Register Berhasil"});
        } catch (error) {
            res.status(400).json({msg: error.message});
    }
}
//done
export const updateGridColumn = async(req, res) =>{
    const gridColumn = await GridColumnModel.findOne({
        where:{
            uuid:req.params.id
        }
    });
    if(!gridColumn) return res.status(404).json({msg:"Data Spesialis Tidak Di temukan"});
    const {judulGrid,shortText, longText,album} = req.body;
    try {
        await GridColumnModel.update({
            judulGrid:judulGrid,
            shortText:shortText,
            longText:longText,
           
            
        },{
            where: {
                uuid : gridColumn.uuid
            }
        });
        res.status(200).json({msg: "Update Berhasil"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}
//done
export const deleteGridColumn = async(req, res) =>{
    const gridColumn = await GridColumnModel.findOne({
        where:{
            uuid:req.params.id
        }
    });
    if(!gridColumn) return res.status(404).json({msg:"Data Spesialis Tidak Di temukan"});
    try {
        await GridColumnModel.destroy({
            where: {
                uuid : gridColumn.uuid
            }
        });
        res.status(200).json({msg: "Data Spesialis Berhasil delete"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}