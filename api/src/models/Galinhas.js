'use strict';
module.exports = (sequelize, DataTypes) => {
  const Galinhas = sequelize.define('Galinhas', {
    nome: DataTypes.STRING,
    cor: DataTypes.STRING,
    idade: DataTypes.NUMBER,
    nova: DataTypes.BOOLEAN,
    sexo: DataTypes.STRING
  }, {});
  Galinhas.associate = function (models) {

  };
  return Galinhas;
};