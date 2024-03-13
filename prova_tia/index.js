import { palavrasEscolaFundador, palavrasCursosTecnicos, palavrasMatricula } from prova_tia/prova-mensal-arquivo-auxiliar.js;

function respondePergunta(pergunta) {
    const pergunta = "Pergunta lalalalalal";
    const palavras = pergunta.split(" ");
        
    
    if (verificaPalavras(palavras.palavrasEscolaFundador.probablyWords)){
        console.log("A fundadora do Bento Quirino foi a Manoela Joaquina de Oliveira Santos, ela foi a esposa do Bento Quirino dos Santos ");
    } else if (verificaPalavras(palavras, palavrasCursosTecnicos.probablyWords)){
        console.log("Os cursos do Bento Quirino são:Análise Clínicas, Edificações, Enfermagem, Farmácia, Mecatronica, Nutricao, Quimica, Segurança do Trabalho, Transações Imobiliarias e Veterinarias ");
    } else if (verificaPalavras(palavras, palavrasMatricula.probablyWords)){
        console.log("Você pode ematricular ou rematricular no site do Bento Quirino: https://www.bentoquirino.com.br/novo/");
    } else {
        console.log("Não sei responer a isso :( ");
    }
    return;
}
