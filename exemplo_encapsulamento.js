class Retangulo {

    constructor(pBase, pAltura) {
        let base;
        let altura;
        this.getBase = () => base;
        this.setBase = (novaBase) => { base = novaBase; };
        this.getAltura = () => altura;
        this.setAltura = (novaAltura) => { altura = novaAltura };

        this.setBase(pBase);
        this.setAltura(pAltura);
    }

    get base() { return this.getBase(); }

    set base(novaBase) { 
        this.setBase(novaBase); 
    }

    get area() {
        return this.getBase() * this.getAltura();
    }
}

const r = new Retangulo(5, 10);
console.log(r);
console.log(r.base);
r.base = 25;
console.log(r.base);