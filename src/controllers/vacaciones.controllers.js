const catchError = require('../utils/catchError');
const Vacaciones = require('../models/Vacaciones');

const getAll = catchError(async(req, res) => {
    const results = await Vacaciones.findAll();
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const result = await Vacaciones.create(req.body);
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Vacaciones.findByPk(id);
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Vacaciones.findByPk(id);
    await Vacaciones.destroy({ where: {id} });
    return res.json(result).sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Vacaciones.update(
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