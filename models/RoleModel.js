import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const RoleModel = db.define('role', {
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate: {
            notEmpty:true
        }
    },
    nameRole:{
        type: DataTypes.STRING,
        allowNull: true,
        validate:{
            notEmpty:true
        }
    },
},{
    freezeTableName: true
});

export default RoleModel;