class Quadrado {

    /*
    Atributos:
    + lado
    */
    cor;

    constructor (lado) {
        if (isNaN(lado)) throw "lado deve ser um número";
        this.lado = lado;
    }

    calcularArea() {
        const area = this.lado * this.lado;
        return area;
    }
}

const quadrado1 = new Quadrado(10);
const area = quadrado1.calcularArea();

console.log(quadrado1);
console.log(area);