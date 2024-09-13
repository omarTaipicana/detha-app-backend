const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");

const Variables = sequelize.define(
  "variables",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    estadoCivil: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    etnia: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    discapacidad: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tipoDeDocumento: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tipoDeDesplazamiento: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    causaDesplazamiento: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    funcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tipoLicencia: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    grado: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    novedad: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    vacaciones: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    parteDiario: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tipoContacto: {
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

module.exports = Variables;
