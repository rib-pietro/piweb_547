class Pessoa {

    constructor (_nome, _email, _telefone) {
        let nome, email, telefone;

        this.getNome = () => nome;
        this.setNome = (novoNome) => nome = novoNome;

        this.getEmail = () => email;
        this.setEmail = (novoEmail) => email = novoEmail;

        this.getTelefone = () => telefone;
        this.setTelefone = (novoTelefone) => telefone = novoTelefone;

        this.setNome(_nome);
        this.setEmail(_email);
        this.setTelefone(_telefone);
    }
}

class PessoaFisica extends Pessoa {
    
    constructor (nome, email, telefone, cpf) {
        super(nome, email, telefone);
        this.cpf = cpf;
    }
}

const pessoa = new Pessoa('Pietro', 'pietro@email.com', '(11) 91234-7890', '12345678910');
console.log(pessoa.getNome());