const express = require('express');
const UserController = require('./controllers/UserController');
const ReposController = require('./controllers/ReposController');


const routes = express.Router();

routes.get('/api/users', UserController.index);
routes.get('/api/users/:username/details', UserController.details);
routes.get('/api/users/:username/repos', ReposController.index);
routes.get('/api/teste', (req, res) => { 
    return res.json({
        test: "teste localhost:3333",
    })
}); 


module.exports = routes;