const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");

const Contactos = sequelize.define("contactos", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4, 
    primaryKey: true, 
    allowNull: false,
  },
  tipoContacto: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contacto: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Contactos;
