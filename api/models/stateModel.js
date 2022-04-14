import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database.js";

class State extends Model { }

State.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    timestamps: false
});

export default State;