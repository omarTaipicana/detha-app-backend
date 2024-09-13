const { getAll, create, getOne, remove, update } = require('../controllers/pases.controllers');
const express = require('express');

const pasesRouter = express.Router();

pasesRouter.route('/pases')
    .get(getAll)
    .post(create);

pasesRouter.route('/pases/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = pasesRouter;