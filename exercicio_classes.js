/* Questão 1 

Crie uma classe Cliente cujos atributos são nome, idade e e-mail. Construa um método que imprima as informações tal como abaixo:

Nome: Fulano de Tal

Idade: 40

E-mail: fulano@mail.com


class Cliente {

    constructor(nome, idade, email) {
        this.nome = nome;
        this.idade = idade;
        this.email = email;
    }

    print() {
        console.log(`Nome: ${this.nome}

Idade: ${this.idade}

E-mail: ${this.email}`);
    }
};

const cliente = new Cliente('Pietro', 43, 'pietro@email.com');
cliente.print();
*/

/* Questão 2 

Crie uma classe Bola cujos atributos são cor e raio. Crie um método que imprime a cor da bola. Crie um método para calcular a área dessa bola. Crie um método para calcular o volume da bola. Crie um objeto dessa classe e calcule a área e o volume, imprimindo ambos em seguida.

Obs.:

Área da esfera = 4*3.14*r*r;

Volume da esfera = 4*3.14*r*r*r/3


class Bola {
    
    constructor(raio, cor) {
        this.raio = raio;
        this.cor = cor;
    }
    
    printColor() {
        console.log(this.cor);
    }
    
    getArea() {
        // const area = 4 * 3.14 * this.raio * this.raio;
        // return area;
        return 4 * 3.14 * Math.pow(this.raio, 2);
    }
    
    getVolume() {
        // return 4 * 3.14 * this.raio * this.raio * this.raio / 3;
        return this.getArea() * (this.raio / 3);
    }
}

const minhaBola = new Bola(10, 'azul');
const area = minhaBola.getArea();
const volume = minhaBola.getVolume();
console.log(`Área: ${area}`);
console.log(`Volume: ${volume}`);
minhaBola.printColor();
*/

/* Questão 3 

Crie uma classe Retângulo cujos atributos são lado_a e lado_b. Crie um método para calcular a área desse retângulo. Crie um objeto dessa classe e calcule a área e a imprima em seguida.


class Retangulo {

    constructor(lado_a, lado_b) {
        this.lado_a = lado_a;
        this.lado_b = lado_b;
    }

    getArea() {
        return this.lado_a * this.lado_b;
    }
}

const rect = new Retangulo(5, 10);
const area = rect.getArea();
console.log(area);

*/

/* Questão 4 

Crie uma classe Funcionario cujos atributos são nome e e-mail, horas trabalhadas e salário. Guarde as horas trabalhadas como um objeto (sem necessariamente utilizar classes) cujas chaves são o mês em questão e, como outro objeto, guarde o salário por hora relativo ao mês em questão. Crie um método que retorna o salário mensal do funcionário.



class Funcionario {

    constructor(nome, email, horas_trabalhadas, salario) {
        this.nome = nome;
        this.email = email;
        this.horas_trabalhadas = horas_trabalhadas;
        this.salario = salario;
    }

    getSalarioMensal() {
        const qtd = this.horas_trabalhadas.qtd;
        const valor = this.salario.valor;
        return qtd * valor;
    }
}

const horas_trabalhadas = {
    qtd: 40,
    mes: 'Janeiro'
};
const salario = {
    valor: 15
};
const funcionario = new Funcionario('Pietro', 'pietro@email.com', horas_trabalhadas, salario);
console.log(funcionario);
console.log(funcionario.getSalarioMensal());

*/

/* Questão 5

Crie uma classe Televisor cujos atributos são:

a. fabricante;

b. modelo;

c. canal atual;

d. lista de canais; e

e. volume.

Faça métodos para aumentar/diminuir volume, trocar o canal e sintonizar um novo canal, que adiciona um novo canal à lista de canais (somente se esse canal não estiver nesse vetor). No atributo lista de canais, devem estar armazenados todos os canais já sintonizados dessa TV.

Obs.: O volume não pode ser menor que zero e maior que cem; só se pode trocar para um canal que já esteja na lista de canais.

*/

class Televisor {

    constructor(fabricante, modelo, listaDeCanais, volume = -20) {
        this.fabricante = fabricante;
        this.modelo = modelo;
        this.listaDeCanais = listaDeCanais;
        this.canalAtual = listaDeCanais.length > 0 ? listaDeCanais[0] : undefined;
        this.volume = volume > 100 ? 100 : (volume < 0 ? 0 : volume);
        /*
        if (volume > 100) {
            this.volume = 100;
        } else if (volume < 0) {
            this.volume = 0;
        } else {
            this.volume = volume;
        }
        */
    }

    volumeUp() {
        if (this.volume >= 100) {
            console.log('O volume já está no máximo');
            return;
        }
        this.volume++;
    }

    volumeDown() {
        if (this.volume <= 0) {
            console.log('O volume já está no mínimo');
            return;
        }
        this.volume--;
    }

    isChannelInChannelList(channel) {
        return this.listaDeCanais.includes(channel);
    }

    addChannel(newChannel) {
        // const canAdd = this.listaDeCanais.filter(canal => canal === newChannel).length === 0;
        const canAdd = !this.isChannelInChannelList(newChannel);
        // const canAdd = this.listaDeCanais.findIndex(canal => canal === newChannel) !== -1;
        if (canAdd) {
            this.listaDeCanais.push(newChannel);
            return;
        }
        console.log('Esse canal já está sintonizado!');
    }

    changeChannel(channel) {
        if (this.isChannelInChannelList(channel)) {
            this.canalAtual = channel;
            return;
        }
        console.log(`O canal ${channel} não está sintonizado!!`);
    }
}

const tv = new Televisor('LG', 'SmarTV Top', [], 30);
tv.volumeUp();
tv.volumeUp();
tv.volumeUp();
tv.volumeUp();
tv.volumeUp();
console.log(tv.volume);

tv.volumeDown();
tv.volumeDown();
tv.volumeDown();
console.log(tv.volume);

tv.addChannel('ESPN');
tv.addChannel('SporTV');
tv.addChannel('E!');
tv.changeChannel('SporTV');
tv.changeChannel('Globo');

console.log(tv);

/* Questão 6

Crie uma classe ControleRemoto cujo atributo é televisão (isso é, recebe um objeto da classe do exercício anterior). Crie métodos para aumentar/diminuir volume, trocar o canal e sintonizar um novo canal, que adiciona um novo canal à lista de canais (somente se esse canal não estiver nessa lista).

*/

class ControleRemoto {

    constructor(televisor) {
        if (!(televisor instanceof Televisor)) {
            throw "televisor must be of type Televisor"
        }
        this.televisor = televisor;
    }

    volumeUp() {
        this.televisor.volumeUp();
    }

    volumeDown() {
        this.televisor.volumeDown();
    }

    addChannel(newChannel) {
        this.televisor.addChannel(newChannel);
    }

    changeChannel(channel) {
        this.televisor.changeChannel(channel);
    }

}

const remoteControl = new ControleRemoto(tv);
remoteControl.volumeUp();
remoteControl.volumeUp();
remoteControl.volumeUp();
remoteControl.volumeUp();
remoteControl.volumeUp();
console.log(remoteControl.televisor.volume);

remoteControl.volumeDown();
remoteControl.volumeDown();
remoteControl.volumeDown();
console.log(remoteControl.televisor.volume);

remoteControl.addChannel('Discovery Channel');
remoteControl.addChannel('FOX');
remoteControl.addChannel('Viva');
remoteControl.changeChannel('FOX');
remoteControl.changeChannel('Home & Health');
console.log(remoteControl);