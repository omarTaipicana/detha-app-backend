const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");

const Novedad = sequelize.define("novedad", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  novedad: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tipoDocumento: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  numDocumento: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  suscribe: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  fechaDocumento: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  fechaInicio: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  fechaFin: {
    type: DataTypes.DATEONLY,
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

module.exports = Novedad;
