const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/', (requisicao, resposta) => {
    resposta.send("Òla mundo!")
})

app.listen(3000, () => {
    console.log("Servidor rodando a porta 3000!")
})