const app = require('./app')
const port = 3333


app.listen(port, (error) => error ? console.log("server shutdown"):console.log("server running"))
