export function criarFila(tamanho=5) {
    return [...new Array(tamanho)]
}

    export function colocarNaFila(fila = [], item) {
        if (fila.includes(undefined)) {
            fila[fila.indexOf(undefined)] = item
            return
        }
        console.log("fila cheia");
        return
    }
export function retirarDaFila(fila = []) {
    if (fila[0] === undefined) {
        console.log("fila vazia");
        return
    }
    let primeiroLugar = fila[0]
    for (let i = 0; i < fila.length -1; i++) {
        fila[i] = fila[i+1]
    }
    fila[fila.length -1] = undefined
    console.log(primeiroLugar);
    return primeiroLugar
}