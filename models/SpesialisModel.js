import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const SpesialisModel = db.define('spesialis', {
    id: {
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,  // Tambahkan ini agar kolom `id` menjadi primary key
        validate: {
            notEmpty: true
        }
    },
    name_Spesialis: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            notEmpty: true
        }
    },
}, {
    freezeTableName: true
});

export default SpesialisModel;
