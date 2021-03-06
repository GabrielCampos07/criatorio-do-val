import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database.js";

class User extends Model { }

User.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telephone: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            is: /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false
    },
    active: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
}, {
    sequelize,
    timestamps: false
})

export default User;