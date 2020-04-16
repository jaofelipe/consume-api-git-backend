const express = require('express');
const UserController = require('./controllers/UserController');
const ReposController = require('./controllers/ReposController');


const routes = express.Router();

routes.get('/api/users', UserController.index);
routes.get('/api/users/:username/details', UserController.details);
routes.get('/api/users/:username/repos', ReposController.index);
routes.get('/teste', (req, res) => { 
    return res.json({
        test: "teste chamada API",
    })
}); 


module.exports = routes;