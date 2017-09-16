const restful = require('node-restful')
const mongoose = restful.mongoose

const cadastroEsquema = new mongoose.Schema({

	razao_social: {type: String, required: true},
	nome_fantasia: {type: String, required: true},
	cnpj: {type: String, required: true},
	nome_responsavel: {type: String, required: true},
	cpf_responsavel: {type: String, required: true},
	data_fundacao: {type: Date, required: true}
})

module.exports = restful.model('ciclocadastro', cadastroEsquema)