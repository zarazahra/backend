import { Sequelize } from "sequelize";

const db = new Sequelize ('db_abk', 'root', '', {
    host:"localhost",
    dialect:"mysql",
    timezone: '+7:30',
});

export default db;