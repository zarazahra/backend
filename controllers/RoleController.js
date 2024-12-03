import RoleModel from "../models/RoleModel.js";


export const getRole = async(req, res) =>{
    try {
        const response = await RoleModel.findAll({
            attributes: ['uuid', 'nameRole'],
        })
        res.status(200).json(response);
    }catch (error){
        res.status(500).json({msg:error.message})
    }
}

export const getRoleById = async(req, res) =>{
    try {
        const response = await RoleModel.findOne({
            attributes:['uuid', 'nameRole'],
            where:{
                uuid:req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error){
        res.status(500).json({msg:error.message})
    }
}

export const createRole = async(req, res) =>{
    const {nameRole} = req.body;
      try {
        await RoleModel.create({
            nameRole:nameRole,
        });
        res.status(201).json({msg: "Role baru berhasil"});
      }catch (error){
        res.status(400).json({msg: error.message});
    }
}

export const updateRole = async(req, res) =>{
    const role = await RoleModel.findOne({
        where:{
            uuid:req.params.id
        }
    });
    if(!role) return res.status(404).json({msg: "Role Tidak Ditemukan"});
    const {nameRole} = req.body;
    try{
        await RoleModel.update({
            nameRole:nameRole,
        },{
            where: {
                uuid : role.uuid
            }
        });
        res.status(200).json({msg: "Update Role"});
    }catch (error){
        res.status(400).json({msq: error.message});
    }
}

export const deleteRole = async(req, res) =>{
    const role = await RoleModel.findOne({
        where: {
            uuid:req.params.id
        }
    });
    if(!role) return res.status(404).json({msg:"Role Tidak Ditemukan"});
    try{
        await RoleModel.destroy({
            where: {
                id : role.id
            }
        });
        res.status(200).json({msg: "Role Berhasil Dihapus"})
    } catch (error){
        res.status(400).json({msg: error.message});
    }
}