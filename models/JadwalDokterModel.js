import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const JadwalDokterModel = db.define('jadwalDokter',{
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate:{
            notEmpty:true
        }
    },
    namaDokter:{
        type: DataTypes.STRING,
        allowNull: true,
        validate:{
            notEmpty:true,
        }
    },
    
    spesialis:{
        type: DataTypes.STRING,
        allowNull: true,
        validate:{
            notEmpty:true,
        }
    },
    senin:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty:true,
        }
    },
    selasa:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty:true,
        }
    },
    rabu:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty:true,
        }
    },
    kamis:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty:true,
        }
    },
    jumat:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty:true
        }
    },
    sabtu:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty:true
        }
    },
    minggu:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty:true
        }
    },
    aktif:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty:true
        }
    },
},{
    freezeTableName:true
});


export default JadwalDokterModel;