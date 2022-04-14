import { Model, DataTypes } from "sequelize/types";

class Chicken extends Model {}

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
    }
});

Chicken.associations = function(models) {
    Chicken.hasOne(models.BreedChicken, {
        foreignKey: 'breed_id'
    });
}

export default Chicken;