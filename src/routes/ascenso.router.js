const { getAll, create, getOne, remove, update } = require('../controllers/ascenso.controllers');
const express = require('express');
const verifyJWT = require('../utils/verifyJWT');

const ascensoRouter = express.Router();

ascensoRouter.route('/ascensos')
    .get(verifyJWT, getAll)
    .post(verifyJWT, create);

ascensoRouter.route('/ascensos/:id')
    .get(verifyJWT, getOne)
    .delete(verifyJWT, remove)
    .put(verifyJWT, update);

module.exports = ascensoRouter;