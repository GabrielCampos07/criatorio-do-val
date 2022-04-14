import { Sequelize } from "sequelize";

const sequelize = new Sequelize('criatorio-db', 'user', 'pass', {
    dialect: 'sqlite',
    host: './dev.seqlite'
});

export default sequelize;