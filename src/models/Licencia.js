const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");

const Licencia = sequelize.define("licencia", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  tipoLicencia: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fechaInicio: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  fechaFin: {
    type: DataTypes.DATEONLY,
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

module.exports = Licencia;
