// Lista de alunos
const listaAlunos = [
    {
        nome: "Jorge",
        idade: 19,
        materias: [
            {
                nomeMateria: "TIA",
                totalHoras: 100,
                presenca: 75,
                nota: 10
            },
            {
                nomeMateria: "PDM",
                totalHoras: 100,
                presenca: 50,
                nota: 5
            },
        ]
    },
    {
        nome: "Maria",
        idade: 20,
        materias: [
            {
                nomeMateria: "TIA",
                totalHoras: 100,
                presenca: 90,
                nota: 8
            },
            {
                nomeMateria: "PDM",
                totalHoras: 100,
                presenca: 80,
                nota: 7
            },
        ]
    }
]

// Precisa ter 75% de presença ou mais
// Precisa ter nota acima de 6
function avaliaAluno(materia) {
    if (materia.nota >= 6 && materia.presenca >= 75) {
        console.log("NOTA: " + materia.nota)
        console.log("PRESENCA: " + materia.presenca)
        console.log("APROVADO")
        return
    }

    console.log("NOTA: " + materia.nota)
    console.log("PRESENCA: " + materia.presenca)
    console.log("REPROVADO: ")
}

function validaTurma(listaDeAlunos) {
    listaDeAlunos.forEach(aluno => {
        console.log("╔═════════════════════════════════════════╗");
        console.log("║       *** Avaliação de Alunos ***       ║");
        console.log("╚═════════════════════════════════════════╝");
        console.log("Avaliando aluno: " + aluno.nome);
        aluno.materias.forEach(materia => {
            console.log("Avaliando matéria: " + materia.nomeMateria);
            avaliaAluno(materia);
        });
    });
}

// Chamada da função para validar a turma
validaTurma(listaAlunos);
