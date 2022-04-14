import { Model, DataTypes } from "sequelize/types";

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
    role: {
        type: DataTypes.STRING,
        allowNull: false
    },
    active: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
})

User.associations = function(models) {
    User.hasOne(models.State, {
        foreignKey: 'state_id'
    });
}

export default User;