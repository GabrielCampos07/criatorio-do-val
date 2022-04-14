import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database.js";

class BreedChicken extends Model { }

BreedChicken.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    timestamps: false
});


export default BreedChicken;