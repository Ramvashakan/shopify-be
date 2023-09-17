const ItemsRouter = require('express').Router();
const { getAllItems } = require('./Controller');

ItemsRouter.get('/', getAllItems);

module.exports = {
  ItemsRouter,
};
