const { getAll, create, getOne, remove, update } = require('../controllers/novedad.controllers');
const express = require('express');
const verifyJWT = require('../utils/verifyJWT');

const novedadRouter = express.Router();

novedadRouter.route('/novedades')
    .get(verifyJWT, getAll)
    .post(verifyJWT, create);

novedadRouter.route('/novedades/:id')
    .get(verifyJWT, getOne)
    .delete(verifyJWT, remove)
    .put(verifyJWT, update);

module.exports = novedadRouter;