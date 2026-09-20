const express = require ("express")  //Criação da requisição do express
const router = express.Router() // Criação da primeira rota
const {v4: uuidv4} = require('uuid')

const app = express() //Inicio do app
const porta = 3333 // Criação da porta
//aqui estou criando lista inicial de mulheres
const mulheres = [

    // Criação da primeira lista de mulheres
    {
   id:'1',
   nome: 'Simara Conceição',    
   imagem: 'https://bit.ly/3LJIyOF',
   minibio: 'Desenvolvedora e instrutora',

 },

 {
    id:'2',
    nome: 'Iana Chan',
    imagem: 'https://bit.ly/3JCXBqP',
    minibio: 'CEO & Founder da PrograMaria',

 },

 {  id:'3',
    nome: 'Luana Pimentel',
    imagem: 'https://bit.ly/3FKpFaz',
    minibio: 'Senior Staff Software Engineer',
 }

]

//GET

function mostraMulheres(request,response) {

    response.json(mulheres)
}

//POST

function criaMulher(request,response){
    const novaMulher ={
        id:uuidv4(),
        nome:request.body.nome,
        imagem:request.body.image,
        minibio:request.body.minibio
    }
  mulheres.push(novaMulher)
  response.json(mulheres)
}

// PORTA

function mostraPorta (){
    console.log ("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulheres',mostraMulheres)) // rota GET/mulheres
app.use(router.post('/mulheres)', criaMulher)// configuração da rota POST/mulheres
app.listen(porta, mostraPorta) // servidor ouvindo a porta 


 