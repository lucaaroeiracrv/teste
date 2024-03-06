const chamada = [
    {
        nome: "João",
        idade: 15,
        materiasCursadas: ["TIA", "PDM", "BD1", "BD2", "AOS"]
    },
    {
        nome: "Ana",
        idade: 17,
        materiasCursadas: ["TIA", "PDM", "AOS"]
    },
    {
        nome: "Debroi",
        idade: 20,
        materiasCursadas: ["TIA", "PDM", "BD1", "AOS"]
    },
    {
        nome: "Jorge",
        idade: 19,
        materiasCursadas: ["TIA", "PDM", "BD1", "BD2", "AOS"]
    },
    {
        nome: "Brayan",
        idade: 18,
        materiasCursadas: ["BD1", "BD2"]
    },
]
chamada.forEach(x => {
    if (x.idade >= 18) {
        console.log(x.nome);
    }
});  
chamada.sort((a, b) => a.nome.localeCompare(b.nome));
console.log(chamada);

chamada.forEach(x => {
    if (x.idade >= 18 && x.materiasCursadas.includes("TIA")) {
        console.log(x.nome);
    }
});
const chamadaFiltrada = chamada.filter(o => o.materiasCursadas.length > 3);
const chamadaFiltradaDiferente = chamadaFiltrada.sort((a, b) => a.nome.localeCompare(b.nome));
chamadaFiltradaDiferente.forEach(x => {
    console.log(x);
});