const express = require('express')
const router = express.Router()
const app = express()
const porta = 3333


function mostraMulher(require,response){
    response.json({

    nome: 'Simara Conceição',

    imagem: 'https://github.com/simaraconceicao.png',

    minibio: 'Desenvolvedora e instrutora'
    })
}


function mostraPorta(){
    console.log ("Servidor criado e roteando a porta :3333")

}
app.use(router.get('/mulher', mostraMulher))
app.listen(porta,mostraPorta)