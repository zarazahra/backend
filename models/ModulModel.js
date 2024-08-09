import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const ModulModel = db.define('module',{
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate:{
            notEmpty:true
        }
    },
    namaModul:{
        type: DataTypes.STRING,
        allowNull: true,
        validate:{
            notEmpty:true,
        }
    },
    
    link:{
        type: DataTypes.STRING,
        allowNull: true,
        validate:{
            notEmpty:true,
        }
    },
    publish:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty:true,
        }
    },
    aktif:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty:true
        }
    },
    status:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty:true
        }
    },
},{
    freezeTableName:true
});


export default ModulModel;