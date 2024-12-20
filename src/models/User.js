const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");

const User = sequelize.define("user", {
  cI: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
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
  unidadSubzona: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tipoDesignacion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rol: {
    type: DataTypes.TEXT,
    allowNull: false,
    defaultValue: "AsistenteTH",
  },
  enabled: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  isVerified: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  usuarioControl: {
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

User.prototype.toJSON = function () {
  const values = Object.assign({}, this.get());
  delete values.password;
  return values;
};

module.exports = User;
