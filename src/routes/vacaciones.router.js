const { getAll, create, getOne, remove, update } = require('../controllers/vacaciones.controllers');
const express = require('express');
const verifyJWT = require('../utils/verifyJWT');

const vacacionesRouter = express.Router();

vacacionesRouter.route('/vacaciones')
    .get(verifyJWT, getAll)
    .post(verifyJWT, create);

vacacionesRouter.route('/vacaciones/:id')
    .get(verifyJWT, getOne)
    .delete(verifyJWT, remove)
    .put(verifyJWT, update);

module.exports = vacacionesRouter;