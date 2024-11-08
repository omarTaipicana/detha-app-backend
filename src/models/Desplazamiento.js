const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");

const Desplazamiento = sequelize.define("desplazamiento", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  tipoDesplazamiento: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lugarComision: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  tipoDocumento: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  numeroDocumento: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fechaDocumento: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  fechaInicio: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  fechaFinalizacionDoc: {
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
  nomenclaturaNoDigin: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  unidadSubzona: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  causaDesplazamiento: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  verificaPlanAccion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  planAccion: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  personalRelevo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  fechaPresentacion: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
  fechaFinalización: {
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

module.exports = Desplazamiento;
