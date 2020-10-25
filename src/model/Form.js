const mongoose = require('mongoose')

const FormSchema = new mongoose.Schema({
    nome: String,
    email: String,
    senha: String,
    data: Number,
    cpf: Number,
    sexo: String,

})

module.exports = mongoose.model("Form", FormSchema)
