const User = require("./User");
const EmailCode = require("./EmailCode");
const Contactos = require("./Contactos");
const Servidorpolicial = require("./ServidorPolicial");
const Titulo = require("./Titulo");
const Pases = require("./Pase");
const Desplazamiento = require("./Desplazamiento");
const Ascenso = require("./Ascenso");
const Licencia = require("./Licencia");
const Novedad = require("./Novedad");
const Capacitacion = require("./Capacitacion");

EmailCode.belongsTo(User);
User.hasOne(EmailCode);

Contactos.belongsTo(Servidorpolicial)
Servidorpolicial.hasMany(Contactos)

Titulo.belongsTo(Servidorpolicial)
Servidorpolicial.hasMany(Titulo)

Pases.belongsTo(Servidorpolicial)
Servidorpolicial.hasMany(Pases)

Desplazamiento.belongsTo(Servidorpolicial)
Servidorpolicial.hasMany(Desplazamiento)

Ascenso.belongsTo(Servidorpolicial)
Servidorpolicial.hasMany(Ascenso)

Licencia.belongsTo(Servidorpolicial)
Servidorpolicial.hasMany(Licencia)

Novedad.belongsTo(Servidorpolicial)
Servidorpolicial.hasMany(Novedad)

Capacitacion.belongsTo(Servidorpolicial)
Servidorpolicial.hasMany(Capacitacion)
