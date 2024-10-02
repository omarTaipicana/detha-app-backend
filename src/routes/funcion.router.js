const { getAll, create, getOne, remove, update } = require('../controllers/funcion.controllers');
const express = require('express');
const verifyJWT = require('../utils/verifyJWT');

const funcionRouter = express.Router();

funcionRouter.route('/funcion')
    .get(verifyJWT, getAll)
    .post(verifyJWT, create);

funcionRouter.route('/funcion/:id')
    .get(verifyJWT, getOne)
    .delete(verifyJWT, remove)
    .put(verifyJWT, update);

module.exports = funcionRouter;