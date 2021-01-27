class Pessoa {

    constructor (nome, email, telefone) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
    }

    toString() {
        return `Nome: ${this.nome}\nE-mail: ${this.email}\nTelefone: ${this.telefone}`;
    }
}

class PessoaFisica extends Pessoa {
    
    constructor (nome, email, telefone, cpf) {
        super(nome, email, telefone);
        this.cpf = cpf;
    }

    toString() {
        return `${super.toString()}\nCPF: ${this.cpf}`;
    }
}

class PessoaJuridica extends Pessoa {

    constructor (nome, email, telefone, cnpj, razaoSocial) {
        super(nome, email, telefone);
        this.cnpj = cnpj;
        this.razaoSocial = razaoSocial;
    }

    toString() {
        return `${super.toString()}\nCNPJ: ${this.cnpj}\nRazão Social: ${this.razaoSocial}`;
    }
}

const pessoa = new Pessoa('Marcus', 'marcus@email.com', '(11) 91234-7890');
const pessoaF = new PessoaFisica('Pietro', 'pietro@email.com', '(11) 91234-7890', '00000000000');
const pessoaJ = new PessoaJuridica('Pietro Ltda', 'contato@pietro.com', '(11) 3312-7890', '000-000-000/0000', 'Pietro Laticínios');
console.log(pessoa.toString());
console.log('-------------');
console.log(pessoaF.toString());
console.log('-------------');
console.log(pessoaJ.toString());