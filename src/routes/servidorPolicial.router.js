const { getAll, create, getOne, remove, update } = require('../controllers/servidorPolicial.controllers');
const express = require('express');
const verifyJWT = require('../utils/verifyJWT');

const servidorPolicialRouter = express.Router();

servidorPolicialRouter.route('/servidores')
    .get(verifyJWT,getAll)
    .post(verifyJWT,create);

servidorPolicialRouter.route('/servidores/:id')
    .get(verifyJWT,getOne)
    .delete(verifyJWT,remove)
    .put(verifyJWT,update);

module.exports = servidorPolicialRouter;