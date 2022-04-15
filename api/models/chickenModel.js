import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database.js";

class Chicken extends Model { }

Chicken.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: DataTypes.STRING,
        allowNull: false
    },
    color: {
        type: DataTypes.STRING,
        allowNull: false
    },
    breed: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    timestamps: false
})

export default Chicken;