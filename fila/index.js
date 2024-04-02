
import { colocarNaFila, criarFila, retirarDaFila } from "./funcoes.js";

const fila = criarFila()

colocarNaFila(fila, "1º")
colocarNaFila(fila, "2º")
colocarNaFila(fila, "3º")

console.log(fila);

let item = retirarDaFila(fila)
console.log(item + "saiu da fila");