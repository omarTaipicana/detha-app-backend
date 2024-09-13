const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");

const Pases = sequelize.define("pases", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  numeroTelegrama: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fechaTelegrama: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  direccion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  unidad: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nomenclatura: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cargo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  unidadSubzona: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nomenclaturaNoDigin: {
    type: DataTypes.STRING,
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

module.exports = Pases;
