const { getAll, create, getOne, remove, update } = require('../controllers/desplazamiento.controllers');
const express = require('express');
const verifyJWT = require('../utils/verifyJWT');

const desplazamientoRouter = express.Router();

desplazamientoRouter.route('/desplazamientos')
    .get(verifyJWT,getAll)
    .post(verifyJWT,create);

desplazamientoRouter.route('/desplazamientos/:id')
    .get(verifyJWT,getOne)
    .delete(verifyJWT,remove)
    .put(verifyJWT,update);

module.exports = desplazamientoRouter;