export function criarFIla(tamanho=2) {
    return [...new Array(tamanho)]
}
export function inserirFila(fila=[], item) {
    if (fila.includes(undefined)) {
        fila[fila.indexOf(undefined)] = item
        return
    }
    console.log("a fila ja esta cheia");
}



export function removerFila(fila=[]) {
    if (fila[0] === undefined) {
        console.log("A fila esta vazia");
return
    }
    let primeiro = fila[0]
    for (let i = 0; i < fila.length-1; i++) {
        fila[i] = fila[i+1]
        }
        fila[fila.lenght-1] = undefined
    }
    

export function limparFila(fila=[]){


if (fila[0] === undefined) {
        console.log("A fila esta vazia");
return
}
let primeiro = fila[0]
for(let i = 0; i< fila.lenght; i++){
fila[i] = undefined
    }
fila[i] = primeiro
}


export function verTamanhofila(fila=[]){
    
    console.log(fila)
    for (let i = 0; i < fila.length; i++) {
        if (fila[i]===undefined) {
            let emptySpace = empty_space +1
        }
        let usedSpace = usedSpace +1
        let temCosia[]= fila[i]
        let size = fila.length
    }
let obejto[{
    "empty_space": emptySpace,
    "used_space": usedSpace,
    "size": size,
    "sub_queue": fila(usedSpace)
}];

console.log(obejto);
}
