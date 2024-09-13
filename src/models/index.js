const User = require("./User");
const EmailCode = require("./EmailCode");
const Contactos = require("./Contactos");
const Servidorpolicial = require("./ServidorPolicial");
const Titulo = require("./Titulo");
const Pases = require("./Pase");

EmailCode.belongsTo(User);
User.hasOne(EmailCode);

Contactos.belongsTo(Servidorpolicial)
Servidorpolicial.hasMany(Contactos)

Titulo.belongsTo(Servidorpolicial)
Servidorpolicial.hasMany(Titulo)

Pases.belongsTo(Servidorpolicial)
Servidorpolicial.hasMany(Pases)
