function validaCadastro(aluno) {
    // Verifica se o nome do aluno tem no mínimo 10 caracteres
    if (aluno.nome.length < 10) {
        console.log("Erro: Nome do aluno deve ter no mínimo 10 caracteres");
        return;
    }

    // Verifica se a idade do aluno é maior que 14
    if (aluno.idade <= 14) {
        console.log("Erro: Idade do aluno deve ser maior que 14");
        return;
    }

    // Verifica se o aluno está cursando no mínimo 3 matérias
    if (aluno.cursando.length < 3) {
        console.log("Erro: O aluno deve estar cursando no mínimo 3 matérias");
        return;
    }

    // Verifica se o aluno tem no mínimo 2 presenças
    if (aluno.presença.length < 2) {
        console.log("Erro: O aluno deve ter no mínimo 2 presenças");
        return;
    }

    // Verifica se o RA do aluno tem 7 caracteres
    if (aluno.ra.length !== 7) {
        console.log("Erro: O RA do aluno deve ter 7 caracteres");
        return;
    }

    // Se todas as validações passarem, retorna o cadastro válido
    return {
        status: "valid",
        message: "Cadastro válido",
        aluno: aluno
    };
}

// Testes da função validaCadastro
let aluno1 = {
    nome: "Kayky de Brito da Silva", 
    idade: 15,
    cursando: ["TIA", "PDM", "BD1", "BD2", "AOS"],
    presença: ["2022-01-01", "2022-01-02", "2022-01-03", "2022-01-04", "2022-01-05", "2022-01-06", "2022-01-07", "2022-01-08", "2022-01-09", "2022-01-10"],
    ra: "22002200"
};

let aluno2 = {
    nome: "João Silva", 
    idade: 13,
    cursando: ["TIA", "PDM"],
    presença: ["2022-01-01"],
    ra: "12345"
};

// Testando aluno1
console.log(validaCadastro(aluno1));

// Testando aluno2
console.log(validaCadastro(aluno2));