const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");

const Organico = sequelize.define(
  "organico",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    year: {
      type: DataTypes.INTEGER,
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
    cargoSiipne: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    grado: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    total: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tipo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    grupoOcupacional: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    direccion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    siglasDireccion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    unidadNombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    siglaUnidad: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    unidadNombreGrupo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    siglaUnidadGrupo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    unidadSubzona: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tipoDesignacion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = Organico;
