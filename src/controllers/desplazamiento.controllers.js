const catchError = require('../utils/catchError');
const Desplazamiento = require('../models/Desplazamiento');
const Organico = require('../models/Organico');

const getAll = catchError(async(req, res) => {
    const results = await Desplazamiento.findAll();
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const { nomenclatura } = req.body;
    const organico = await Organico .findOne({ where: { nomenclatura } });

    if (!organico) {
        return res.status(404).json({ message: 'No se encontró una coincidencia en la tabla Organico' });
    }

    const newDesplazamineto = {
        ...req.body,
        unidadSubzona: organico.unidadSubzona, 
    };
    const result = await Desplazamiento.create(newDesplazamineto);
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Desplazamiento.findByPk(id);
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Desplazamiento.findByPk(id);
    await Desplazamiento.destroy({ where: {id} });
    return res.json(result).sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const { nomenclatura } = req.body;
    const organico = await Organico .findOne({ where: { nomenclatura } });

    if (!organico) {
        return res.status(404).json({ message: 'No se encontró una coincidencia en la tabla Organico' });
    }

    const newDesplazamineto = {
        ...req.body,
        unidadSubzona: organico.unidadSubzona, 
    };

    const result = await Desplazamiento.update(
        newDesplazamineto,
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