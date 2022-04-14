import { Model, DataTypes } from "sequelize/types";

class BreedChicken extends Model {}

BreedChicken.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

BreedChicken.associations = function(models) {
    BreedChicken.belongsTo(models.Chicken);
}

export default BreedChicken;