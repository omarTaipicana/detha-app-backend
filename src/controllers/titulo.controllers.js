const catchError = require('../utils/catchError');
const Titulo = require('../models/Titulo');

const getAll = catchError(async(req, res) => {
    const results = await Titulo.findAll();
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const result = await Titulo.create(req.body);
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Titulo.findByPk(id);
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Titulo.findByPk(id);
    await Titulo.destroy({ where: {id} });
    return res.json(result).sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Titulo.update(
        req.body,
        { where: {id}, returning: true }
    );
    if(result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update
}