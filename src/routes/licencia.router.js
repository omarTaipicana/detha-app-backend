const { getAll, create, getOne, remove, update } = require('../controllers/licencia.controllers');
const express = require('express');
const verifyJWT = require('../utils/verifyJWT');

const licenciaRouter = express.Router();

licenciaRouter.route('/licencias')
    .get(verifyJWT, getAll)
    .post(verifyJWT, create);

licenciaRouter.route('/licencias/:id')
    .get(verifyJWT, getOne)
    .delete(verifyJWT, remove)
    .put(verifyJWT, update);

module.exports = licenciaRouter;