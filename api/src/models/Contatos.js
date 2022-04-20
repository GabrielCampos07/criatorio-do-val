'use strict';
module.exports = (sequelize, DataTypes) => {
  const Contato = sequelize.define('Contato', {
    nome: DataTypes.STRING,
    numero: DataTypes.NUMBER,
    cidade: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  Contato.associate = function(models) {
    // associations can be defined here
  };
  return Contato;
};