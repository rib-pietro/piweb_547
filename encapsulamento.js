// function Retangulo (base, altura) {
//     this.base = base;
//     this.altura = altura;
//     let cor = 'amarelo';

//     this.calcularArea = () => {
//         return this.altura * this.base;
//     };

//     this.getCor = () => {
//         return cor;
//     };

//     this.setCor = (novaCor) => {
//         if (typeof(novaCor) !== 'string') throw "novaCor deve ser uma string";
//         cor = novaCor;
//     };
// }

/*
class Retangulo {

    constructor(base, altura) {
        let cor;
        this.base = base;
        this.altura = altura;
        this.getCor = () => { return cor };
        this.setCor = (novaCor) => { cor = novaCor };
    }
}
*/

// function createRetangulo(base, altura) {
//     return {
//         base,
//         altura,
//         calcularArea: () => {
//             return this.base * this.altura;
//         }
//     };
// }

class Retangulo {

    constructor(base, altura) {
        this._cor = 'amarelo';
        this.base = base;
        this.altura = altura;
    }

    get cor() {
        return this._cor;
    }

    set cor(novaCor) {
        console.log('chamou o método de acesso set!');
        this._cor = novaCor;
    }

    get area() {
        return this.base * this.altura;
    }

}


const rect = new Retangulo(5, 10);
rect.cor = 'vermelho';
// console.log(rect);
console.log(rect.area);
// rect.cor = 'vermelho';
// console.log(rect);
// console.log(rect.getCor());
// rect.setCor('azul');
// console.log(rect.getCor());