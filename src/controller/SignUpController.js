const Form = require("../model/Form");

module.exports = {
    async post(req, res) {
        const { nome, email, senha, data, cpf, sexo } = req.body;

        const verification = await Form.findOne({ cpf });

        if (!verification) {
            const response = await Form.create({
                nome,
                email,
                senha,
                data,
                cpf,
                sexo,
            });

            return res.send({ sucess: "sucesso" });
        }

        return res.status(400).send("Usuário já cadastrado");
    },

    async get(req, res) {
        const response = await Form.find();

        return res.json(response);
    },

    async getOne(req, res) {
        const response = await Form.findOne(req.body.cpf);

        return res.json(response);
    },

    async delete(req, res) {
        const response = await Form.findOneAndDelete(req.params.id);

        return res.json(response);
    },

    async delete(req, res) {
        const response = await Form.deleteMany(req.body);

        return res.json(response);
    },

    async put(req, res) {
        const response = await Form.findOneAndUpdate(req.params.id, req.body);

        return res.json(response);
    },
};
