const { getAll, create, getOne, remove, update } = require('../controllers/talla.controllers');
const express = require('express');
const verifyJWT = require('../utils/verifyJWT');

const tallaRouter = express.Router();

tallaRouter.route('/tallas')
    .get(verifyJWT, getAll)
    .post(verifyJWT, create);

tallaRouter.route('/tallas/:id')
    .get(verifyJWT, getOne)
    .delete(verifyJWT, remove)
    .put(verifyJWT, update);

module.exports = tallaRouter;