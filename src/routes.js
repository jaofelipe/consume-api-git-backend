const express = require('express');
const UserController = require('./controllers/UserController');
const ReposController = require('./controllers/ReposController');


const routes = express.Router();

routes.get('/users', UserController.index);
routes.get('/users/:username/details', UserController.details);
routes.get('/users/:username/repos', ReposController.index);
routes.get('/teste', (req, res) => { 
    return res.json({
        test: "teste chamada API",
    })
}); 


module.exports = routes;