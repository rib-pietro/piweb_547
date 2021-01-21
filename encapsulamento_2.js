class Retangulo {

    constructor(base, altura) {
        this._base = base;
        this._altura = altura;
    }

    get base() { return this._base; }

    set base(novaBase) {
        // if (isNaN(novaBase)) throw "O valor de base deve ser um número!!";
        if (typeof(novaBase) !== 'number') throw "O valor de base deve ser um número!!";
        this._base = novaBase;
    }

    get altura() { return this._altura; }

    set altura(novaAltura) { 
        if (typeof(novaAltura) !== 'number') throw "O valor de altura deve ser um número!!";
        this._altura = novaAltura;
    }

    get area() { return this._base * this._altura }

};

const rect = new Retangulo(5, 10);
rect.base = true;
// rect.altura = 20;
// rect.area = 50;
console.log(rect);
// rect.setBase('Pietro');
// rect._base = 'Pietro';
// console.log(rect.base);

/* Questão em aula

Crie uma classe Quadrado com o atributo lado, escreva o getter e o setter para esse atributo
de modo que não seja permitido que o valor de lado seja não-numérico ou negativo.
*/