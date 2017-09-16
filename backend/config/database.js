const mongoose = require('mongoose')

var conn = mongoose.connect('mongodb://pjss:pjss@ds135234.mlab.com:35234/projeto-01', {
	useMongoClient: true
})
module.exports = conn


mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'."
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que o limite máximo de '{MAX}'."