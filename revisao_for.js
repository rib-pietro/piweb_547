const notas = [8, 7, 6, 10];

/* Usando o paradigma estruturado: */

let notasFormatado = '';

for (let idx in notas) {
    notasFormatado += `${parseInt(idx) + 1}º Bimestre: ${notas[idx]}\n`;
}

console.log(notasFormatado);

/* Fim do paradigma estruturado: */

/* Usando o paradigma funcional: */

const notasFormatado = notas.reduce((textoAtual, notaAtual, indiceAtual) => {
    return textoAtual + `${indiceAtual + 1}º Bimestre: ${notaAtual}\n`;
}, '');

console.log(notasFormatado);