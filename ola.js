const express = require("express")
const app = express()
const router = express.Router()
const porta = 3333

function mostraOla(require,response){
    response.send("Olá Mundo!")
}

function mostraPorta( ){
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/ola',mostraOla))
app.listen  (porta, mostraPorta)