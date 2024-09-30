const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");

const Ascenso = sequelize.define("ascenso", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  fechaAscenso: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  fechaOrden: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  grado: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  numOrden: {
    type: DataTypes.STRING,
    allowNull: false,
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

module.exports = Ascenso;
