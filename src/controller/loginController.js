const Form = require("../model/Form");
const jwt = require("jsonwebtoken");

module.exports = {
    async auth(req, res) {
        const { nome, senha } = req.body;

        const user = await Form.findOne({ nome, senha });

        if (!user) {
            return res.status(400).json({ message: "login Inválido" });
        }
        const id = user.id;
        var token = jwt.sign({ id }, process.env.SECRET, {
            expiresIn: 300,
        });
        return res.json({ auth: true, toke: token });
    },

    async logout(req, res) {
        res.json({ auth: false, token: null });
    },
};
