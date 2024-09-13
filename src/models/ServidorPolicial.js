const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");

const Servidorpolicial = sequelize.define("servidorPolicial", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4, 
    primaryKey: true, 
    allowNull: false,
  },
  cI: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  nombres: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  apellidos: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fechaNacimiento: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  fechaIngreso: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  provinciaResidencia: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  cantonResidencia: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  direccionResidencia: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  estadoCivil: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  etnia: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  acreditado: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  alertaDiscapacidad: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  tipoDiscapacidad: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  porcentajeDiscapacidad: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  detalleDiscapacidad: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  alertaEnfermedadCatastrofica: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  detalleEnfermedad: {
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

module.exports = Servidorpolicial;
