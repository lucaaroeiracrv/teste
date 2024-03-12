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


    criarPilha();
    
    inserirLivro(pilha,livro);

    tirarLivro(pilha);
      
    verificarLivro(pilha, titulo);