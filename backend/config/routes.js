const express = require('express')

module.exports = function(server) {

	//API Routes
	const router = express.Router()
	server.use('/api', router)

	//rotas da API
	const cicloCadastroServico = require('../api/cicloCadastro/cicloCadastroServico')
	cicloCadastroServico.register(router, '/cicloCadastros')
}