import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const PenghargaanModel = db.define('penghargaan', {
    uuid: {
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    gambarPenghargaan: {
        type: DataTypes.STRING,
        allowNull: true,  // Allow null if no image is provided
        validate: {
            isUrl: true  // Optional: Validate that the string is a URL
        }
    },
    namaPenghargaan: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
}, {
    freezeTableName: true
});

export default PenghargaanModel;
