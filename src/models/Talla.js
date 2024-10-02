const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");

const Talla = sequelize.define("talla", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  calzado: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  camisaSport: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  camisaCorbata: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  camisaPolo: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  camisetaB2: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  chaleco: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  chaquetaB2: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  chompa: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  correa: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  gorra: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  kepiB2: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  pantalonB2: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  pantalonTerno: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  pantalonOperativo: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  sacoTerno: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  usuarioRegistro: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  usuarioEdicion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Talla;
