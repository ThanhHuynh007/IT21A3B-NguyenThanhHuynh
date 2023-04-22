const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const createDiem = {
  body: Joi.object().keys({
    studentCode: Joi.string().required(),
    maMonHoc: Joi.string().optional(),
    Diem: Joi.number().optional(),
  }),
};

const getDiems = {
  query: Joi.object().keys({
    studentCode: Joi.string(), 
    role: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getDiem = {
  params: Joi.object().keys({
    studentCode: Joi.string().required(), 
  }),
};

const updateDiem = {
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
  body: Joi.object()
    .keys({
    born: Joi.date().optional(),
    gender: Joi.boolean().optional(),
    address: Joi.string().optional(),
    })
    .min(1),
};

const deleteDiem = {
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
};

module.exports = {
  createDiem,
  getDiems,
  getDiem,
  updateDiem,
  deleteDiem,
};
