'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ovos = sequelize.define('Ovos', {
    pai: DataTypes.STRING,
    mae: DataTypes.STRING,
    chocado: DataTypes.DATE,
    nasce: DataTypes.DATE
  }, {});
  Ovos.associate = function(models) {
    // associations can be defined here
  };
  return Ovos;
};