const { getAll, create, getOne, remove, update } = require('../controllers/contactos.controllers');
const express = require('express');
const verifyJWT = require('../utils/verifyJWT');

const contactosRouter = express.Router();

contactosRouter.route('/contactos')
    .get(verifyJWT, getAll)
    .post(verifyJWT, create);

contactosRouter.route('/contactos/:id')
    .get(verifyJWT, getOne)
    .delete(verifyJWT, remove)
    .put(verifyJWT, update);

module.exports = contactosRouter;