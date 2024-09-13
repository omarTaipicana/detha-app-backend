const express = require("express");
const userRouter = require("./user.router");
const organicoRouter = require("./organico.router");
const servidorPolicialRouter = require("./servidorPolicial.router");
const senpladesRouter = require("./senplades.router");
const variablesRouter = require("./variables.router");
const contactosRouter = require("./contactos.router");
const tituloRouter = require("./titulo.router");
const pasesRouter = require("./pases.router");
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

module.exports = router;
