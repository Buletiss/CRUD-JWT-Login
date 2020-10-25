const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://zerobala:zerobala@cluster0.pkdsr.mongodb.net/<dbname>?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true },
    (error) => error ? console.log("db error") : console.log("db run")
)
