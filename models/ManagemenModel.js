import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const ManagemenModel = db.define('managemen',{
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate:{
            notEmpty:true
        }
    },
    userName:{
        type: DataTypes.STRING,
        allowNull: true,
        validate:{
            notEmpty:true,
        }
    },
    
    namaLengkap:{
        type: DataTypes.STRING,
        allowNull: true,
        validate:{
            notEmpty:true,
        }
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty:true,
        }
    },
    noTelpn:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty:true
        }
    },
    level:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty:true
        }
    },
    blokir:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty:true
        }
    },
},{
    freezeTableName:true
});


export default ManagemenModel;