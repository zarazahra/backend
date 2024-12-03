import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const DataDokterModel = db.define('dataLabor', {
    uuid: {
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    gambarFoto: {
        type: DataTypes.STRING,
        allowNull: true,  // Allow null if no image is provided
        validate: {
            isUrl: true  // Optional: Validate that the string is a URL
        }
    },
    namaLabor: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
   
}, {
    freezeTableName: true
});

export default DataDokterModel;
