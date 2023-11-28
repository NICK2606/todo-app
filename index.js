const express = require("express")

const app = express()

app.get('/', (requisicao, resposta) => {
    resposta.send("Òla mundo!")
})

app.listen(3000,() => {
    console.log("Servidor rodando a porta 3000!")
})