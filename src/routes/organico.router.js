const { getAll, create, getOne, remove, update } = require('../controllers/organico.controllers');
const express = require('express');

const organicoRouter = express.Router();

organicoRouter.route('/organicos')
    .get(getAll)
    .post(create);

organicoRouter.route('/organicos/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = organicoRouter;