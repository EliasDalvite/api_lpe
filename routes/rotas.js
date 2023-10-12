const { Router } = require('express');

const { rotasGeneros } = require('./rotasGeneros');

const { rotasJogos} = require('./rotasJogos');

const { login } = require('../controllers/segurancaController');

const rotas = new Router();

// rota para o login
rotas.route('/login').post(login);

rotas.use(rotasGeneros);
rotas.use(rotasJogos);

module.exports = rotas;