import { Sequelize } from "sequelize";

const db = new Sequelize ('abk', 'root', '', {
    host:"localhost",
    dialect:"mysql",
    timezone: '+7:30',
});

export default db;