const { Router } = require("express");
const routes = Router();

const SignUpController = require("./controller/SignUpController");
const loginController = require("./controller/loginController");

routes.post("/register", SignUpController.post);
routes.get("/", SignUpController.get);
routes.delete("/:id", SignUpController.delete);
routes.delete("/dell", SignUpController.delete);
routes.put("/:id", SignUpController.put);

routes.post("/login", loginController.auth);
routes.post("/logout", loginController.logout);
// routes.get("/login", loginController.get);

module.exports = routes;
