

let chamadaDeAlunos = [
    {
        nome: "Kayky",
        idade: 16,
        materias: [
            {
                nome: "Tecnologias em Inteligência Artificial",
                presenca: 75,
                nota: 10
            },
            {
                nome: "Programação para Dispositivos Móveis",
                presenca: 90,
                nota: 10
            },
        ],
        numeroChamada: 1221
    },
    {
        nome: "Ana",
        idade: 17,
        materias: [
            {
                nome: "BD1",
                presenca: 100,
                nota: 10
            },
            {
                nome: "Programação para Dispositivos Móveis",
                presenca: 90,
                nota: 7.5
            },
        ],
        numeroChamada: 1222
    },
    {
        nome: "Matheus",
        idade: 20,
        materias: [
            {
                nome: "Tecnologias em Inteligência Artificial",
                presenca: 79,
                nota: 8.5
            },
            {
                nome: "Programação para Dispositivos Móveis",
                presenca: 60,
                nota: 6.5
            },
        ],
        numeroChamada: 1223
    },
    {
        nome: "Jorge",
        idade: 19,
        materias: [
            {
                nome: "Tecnologias em Inteligência Artificial",
                presenca: 100,
                nota: 10
            },
            {
                nome: "Programação para Dispositivos Móveis",
                presenca: 79,
                nota: 10
            },
        ],
        numeroChamada: 1224
    },
    {
        nome: "Richard",
        idade: 18,
        materias: [
            {
                nome: "BD2",
                presenca: 74,
                nota: 10
            },
            {
                nome: "BD1",
                presenca: 90,
                nota: 7
            },
        ],
        numeroChamada: 1225
    },
]

  function exibirAlunos (chamadaDeAlunos){
    chamadaDeAlunos.forEach(aluno => {
         console.log("nome do aluno: " + aluno.nome)
         console.log("nota do aluno: " + aluno.nota)
         return
     });
    };

     function avaliaAluno(materia){
        if (materia.nota >= 6 && materia.presenca >= 75) {
            console.log("NOTA: " + materia.nota)
            console.log("PRESENCA: " + materia.presenca)
            console.log("APROVADO")
        }else{
            console.log("Alunos Reprovados:");
            console.log("NOTA: " + materia.nota)
            console.log("PRESENCA: " + materia.presenca)
            console.log("REPROVADO")
        }
    return
    }
    function notaDasPonats(chamadaDeAlunos) {
    for (i = 0; i < chamadaDeAlunos.nota.length; i++) {
        if ( chamadaDeAlunos.notas[i] > maior ) {
           maior = chamadaDeAlunos.nota[i];
        }
     }
     for (i = 0; i < chamadaDeAlunos.length; i++) {
        if ( chamadaDeAlunos.noats[i] > maior ) {
           menor = chamadaDeAlunos.nota[i];    
           }
        }
     console.log("Maior Nota: " + maior);
     console.log("Menor Nota: " + menor );        
    }
        

