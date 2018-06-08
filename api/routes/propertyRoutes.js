const express = require('express');
const propertyController = require('../controllers/propertyController');
let appRouter = express.Router();

// EndPoint: /api/property/

appRouter.route('/').get(propertyController.getProperties);

appRouter.route('/').post(propertyController.createProperty);

module.exports = appRouter;