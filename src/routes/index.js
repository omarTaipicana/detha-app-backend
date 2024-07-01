const express = require("express");
const userRouter = require("./user.router");
const organicoRouter = require("./organico.router");
const router = express.Router();

// colocar las rutas aquí

router.use(userRouter);
router.use(organicoRouter)

module.exports = router;
