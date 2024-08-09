import { Sequelize } from "sequelize";

const db = new Sequelize ('abk_db', 'root', '', {
    host:"localhost",
    dialect:"mysql",
    timezone: '+7:30',
});

export default db;