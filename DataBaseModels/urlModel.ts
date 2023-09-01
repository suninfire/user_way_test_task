import {DataTypes, Model, Sequelize } from "sequelize";

export const sequelize = new Sequelize({
    dialect: 'postgres',
    host: process.env.HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DATA_BASE,
});


class Url extends Model {}

Url.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    originalUrl: {
        type: DataTypes.STRING,
        allowNull: false
    },
    shortUrl: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Url',
    tableName: 'links'
});


export default Url;








