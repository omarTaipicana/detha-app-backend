const express = require("express");
const userRouter = require("./user.router");
const organicoRouter = require("./organico.router");
const servidorPolicialRouter = require("./servidorPolicial.router");
const senpladesRouter = require("./senplades.router");
const variablesRouter = require("./variables.router");
const contactosRouter = require("./contactos.router");
const tituloRouter = require("./titulo.router");
const pasesRouter = require("./pases.router");
const desplazamientoRouter = require("./desplazamiento.router");
const ascensoRouter = require("./ascenso.router");
const licenciaRouter = require("./licencia.router");
const novedadRouter = require("./novedad.router");
const capacitacionRouter = require("./capacitacion.router");
const router = express.Router();

// colocar las rutas aquí

router.use(userRouter);
router.use(organicoRouter)
router.use(servidorPolicialRouter)
router.use(senpladesRouter)
router.use(variablesRouter)
router.use(contactosRouter)
router.use(tituloRouter)
router.use(pasesRouter)
router.use(desplazamientoRouter)
router.use(ascensoRouter)
router.use(licenciaRouter)
router.use(novedadRouter)
router.use(capacitacionRouter)


module.exports = router;
