const catchError = require('../utils/catchError');
const Pase = require('../models/Pase');
const Organico = require('../models/Organico');

const getAll = catchError(async(req, res) => {
    const results = await Pase.findAll();
    return res.json(results);
});

const create = catchError(async (req, res) => {
    const { nomenclatura } = req.body;
    const organico = await Organico .findOne({ where: { nomenclatura } });

    if (!organico) {
        return res.status(404).json({ message: 'No se encontró una coincidencia en la tabla Organico' });
    }

    const newPase = {
        ...req.body,
        unidadSubzona: organico.unidadSubzona, 
    };

    const result = await Pase.create(newPase);
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Pase.findByPk(id);
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await Pase.destroy({ where: {id} });
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Pase.update(
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