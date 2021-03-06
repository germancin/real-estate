const express = require('express');
const userController = require('../controllers/userController');
let appRouter = express.Router();
const jwt = require('../service/auth');

// EndPoint: /api/v1/user/

appRouter.route('/').get(userController.getUsers);

appRouter.route('/').post(userController.createUser);

appRouter.route('/check_avalability/:username').get(userController.checkAvalability);

appRouter.route('/check_email_avalability/:email').get(userController.checkEmailAvalability);

appRouter.route('/sign_in').post(userController.signInUser);

appRouter.route('/validate_token').post(jwt.validateToken, jwt.resolve);

appRouter.route('/extend_token_life').get(jwt.extendTokenLife);

appRouter.route('/log_out').get(userController.logOut);


module.exports = appRouter;