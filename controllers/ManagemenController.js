import ManagemenModel from "../models/ManagemenModel.js";


export const getManagemen = async(req, res) =>{
    try {
        const response = await ManagemenModel.findAll({
            attributes:['uuid', 'userName','email','role'],
        })
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}


export const getManagemenById = async(req, res) =>{
    try {
        const response = await ManagemenModel.findOne({
            attributes:['uuid', 'userName','email','role'],
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
export const createManagemen = async(req, res) =>{
    const {userName,email,role, password} = req.body;
        try {
            await ManagemenModel.create({
                userName:userName,
                email:email,
                password: password,
                role: role,
               
            });
            res.status(201).json({msg: "Register Berhasil"});
        } catch (error) {
            res.status(400).json({msg: error.message});
    }
}
//done
export const updateManagemen = async(req, res) =>{
    const managemen = await ManagemenModel.findOne({
        where:{
            uuid:req.params.id
        }
    });
    if(!managemen) return res.status(404).json({msg:"Managemen Tidak Di temukan"});
    const {userName,email,role,password} = req.body;
    try {
        await ManagemenModel.update({
            userName:userName,
            email:email,
            password:password,
            role: role,
           
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
export const deleteManagemen = async(req, res) =>{
    const managemen = await ManagemenModel.findOne({
        where:{
            uuid:req.params.id
        }
    });
    if(!managemen) return res.status(404).json({msg:"managemen Tidak Di temukan"});
    try {
        await ManagemenModel.destroy({
            where: {
                id : managemen.id
            }
        });
        res.status(200).json({msg: "managemen Berhasil delete"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}