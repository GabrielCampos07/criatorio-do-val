import { Model, DataTypes } from "sequelize/types";

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
})

State.associations = function(models) {
    State.belongsTo(models.User);
}

export default State;