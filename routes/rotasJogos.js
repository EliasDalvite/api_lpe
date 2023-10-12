const { Router } = require('express');

const {  getJogos, addJogo, updateJogo, deleteJogo, getJogoPorCodigo } = require('../controllers/jogoController');
const { verificaJWT } = require('../controllers/segurancaController');

const rotasJogos = new Router();

rotasJogos.route('/jogo')
   .get(verificaJWT , getJogos)
   .post(verificaJWT , addJogo)
   .put(verificaJWT , updateJogo)

rotasJogos.route('/jogo/:codigo')
   .get(verificaJWT , getJogoPorCodigo)
   .delete(verificaJWT , deleteJogo)

module.exports = { rotasJogos };