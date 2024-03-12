import {criarPilha, inserirLivro, tirarLivro, verificarLivro  } from './pilha.js'

let alunos = [
    {
        titulo: "Dom Casmurro",
        paginas: 300,
        genero: "clássico",
    },
    {
        titulo: "IT a coisa",
        paginas: 150,
        genero: "terror",
    },
    {
        titulo: "Jason",
        paginas: 70,
        genero: "terror",
    },
    {
        titulo: "Chapéuzinho Vermelho",
        paginas: 10,
        genero: "clássico",
    },
    {
        titulo: "Histórinhas de terror para crianãs",
        paginas: 50,
        genero: "clássico",
    },
]


    function criarPilha(){
    return new pilha[0];
    }
    
    function inserirLivro(pilha,livro){
        for (let i=0; i < alunos.length; i++) {
        pilha.add(livro[i]);
        console.log(`Livro ${alunos.titulo} esta na pilha.`);
        }
    }

    function tirarLivro(pilha){
        for (let i=0; i < alunos.length; i++) {
            const livroTirado = pilha.pop();
            console.log(`Livro ${alunos.titulo} foi removido`);
        }
    }

    function verificarLivro(pilha, titulo) {
        const livroNaPilha = pilha.
        
    }