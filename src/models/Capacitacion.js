const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");

const Capacitacion = sequelize.define("capacitacion", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  capacitacion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lugar: {
    type: DataTypes.STRING,
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

module.exports = Capacitacion;
