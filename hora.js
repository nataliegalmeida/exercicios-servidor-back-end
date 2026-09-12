const express = require("express")
const app = express()
const router = express.Router()
const porta = 3333


function mostraHora(request, response) {

 const data = new Date()

 const hora = data.toLocaleTimeString('pt-BR')

 response.send(hora)

}

function mostraPorta(){
    console.log(`Servidor Criado e Porta funcionando"${porta}`)
}

app.use(router.get('/hora', mostraHora))
app.listen(porta,mostraPorta)