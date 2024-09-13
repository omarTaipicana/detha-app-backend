const { getAll, create, getOne, remove, update } = require('../controllers/titulo.controllers');
const express = require('express');
const verifyJWT = require('../utils/verifyJWT');

const tituloRouter = express.Router();

tituloRouter.route('/titulos')
    .get(verifyJWT, getAll)
    .post(verifyJWT, create);

tituloRouter.route('/titulos/:id')
    .get(verifyJWT, getOne)
    .delete(verifyJWT, remove)
    .put(verifyJWT, update);

module.exports = tituloRouter;