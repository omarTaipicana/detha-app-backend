const { getAll, create, getOne, remove, update } = require('../controllers/capacitacion.controllers');
const express = require('express');
const verifyJWT = require('../utils/verifyJWT');

const capacitacionRouter = express.Router();

capacitacionRouter.route('/capacitaciones')
    .get(verifyJWT, getAll)
    .post(verifyJWT, create);

capacitacionRouter.route('/capacitaciones/:id')
    .get(verifyJWT, getOne)
    .delete(verifyJWT, remove)
    .put(verifyJWT, update);

module.exports = capacitacionRouter;