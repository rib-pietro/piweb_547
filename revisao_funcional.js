const notas = [8, 7, 6, 10];

const notasBase10 = notas.map(nota => nota * 10);
const notasVerdes = notas.filter(nota => nota >= 7);
const somaNotas = notas.reduce((somaAtual, notaAtual) => somaAtual + notaAtual);

console.log(notasBase10);
console.log(notasVerdes);
console.log(somaNotas);