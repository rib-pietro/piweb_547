/* Questão 1 
Crie uma classe chamada Usuario com os atributos

    nome
    sobrenome
    cpf
    email

Crie os métodos de acesso para esses atributos de forma que:

    nome seja sempre uma string
    sobrenome seja sempre uma string com 2+ palavras
    cpf seja uma string que contenha somente números

*/

function validarString(valor, nomeParametro) {
    if (typeof(valor) !== 'string') throw `${nomeParametro} deve ser uma string`;
}

class Usuario {

    constructor(nome, sobrenome, cpf, email) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.cpf = cpf;
        this.email = email;

        let enderecos = [];
        let enderecoFavorito;

        this.adicionarEndereco = (novoEndereco) => {
            if (!(novoEndereco instanceof Endereco)) throw "novoEndereco deve ser uma instância de Endereco";
            enderecos.push(novoEndereco);
            if (enderecos.length === 1) {
                enderecoFavorito = novoEndereco;
            }
        }

    }

    get nome() { return this._nome; }

    set nome(novoNome) { 
        validarString(novoNome, 'nome');
        this._nome = novoNome;
    }

    get sobrenome() { return this._sobrenome; }

    set sobrenome(novoSobrenome) { // 'Augusto Silva Barbosa' => ['Augusto', 'Silva', 'Barbosa']
        validarString(novoSobrenome, 'sobrenome')
        const splittedArray = novoSobrenome.trim().split(' ');
        if (splittedArray.length < 2) throw "sobrenome deve ter ao menos duas palavras";
        this._sobrenome = novoSobrenome.trim();
    }

    get cpf() { return this._cpf; }

    set cpf(novoCpf) {
        validarString(novoCpf, 'cpf');
        if (novoCpf.length !== 11) throw "cpf deve conter 11 dígitos";
        const ehValido = novoCpf.split('').reduce((acc, char) => {
            return acc && (typeof(parseInt(char)) === 'number');
        }, true);
        if (!ehValido) throw "todos os caracteres do cpf devem ser números";
        this._cpf = novoCpf;
    }

    get email() { return this._email; }

    set email(novoEmail) {
        validarString(novoEmail, 'email');
        const emailValidoArroba = novoEmail.split('').filter(char => char === '@').length === 1;
        const emailValidoPonto = novoEmail.split('').filter(char => char === '.').length >= 1;
        if (!emailValidoArroba || !emailValidoPonto) throw "O e-mail deve conter um arroba e ao menos um .";
        this._email = novoEmail;
    }

}

const user = new Usuario('Pietro construtor', 'Borges Silva', '12345678910', 'pietro@.com');

/* Questão 2
Crie uma classe chamada Endereco com os atributos:

    apelido
    estado
    cidade
    bairro
    rua
    numero
*/

class Endereco {

    constructor(p_apelido, p_estado, p_cidade, p_bairro, p_rua, p_numero) {
        let apelido, estado, cidade, bairro, rua, numero;

        this.getApelido = () => apelido;
        this.setApelido = (novoApelido) => { 
            validarString(novoApelido, 'apelido');
            apelido = novoApelido;
        };

        this.getEstado = () => estado;
        this.setEstado = (novoEstado) => { 
            validarString(novoEstado, 'estado');
            if (novoEstado.length !== 2) throw "estado deve ter apenas duas letras";
            if (typeof(novoEstado[0]) !== 'string' || typeof(novoEstado[1]) !== 'string') throw "estado deve conter apenas letras";
            estado = novoEstado;
        };

        this.getCidade = () => cidade;
        this.setCidade = (novaCidade) => { 
            validarString(novaCidade, 'cidade');
            cidade = novaCidade
        };

        this.getBairro = () => bairro;
        this.setBairro = (novoBairro) => { 
            validarString(novoBairro, 'bairro');
            bairro = novoBairro
        };

        this.getRua = () => rua;
        this.setRua = (novoRua) => { 
            validarString(novoRua, 'Rua');
            rua = novoRua
        };

        this.getNumero = () => numero;
        this.setNumero = (novoNumero) => { 
            validarString(novoNumero, 'numero');
            numero = novoNumero
        };

        this.setApelido(p_apelido);
        this.setEstado(p_estado);
        this.setCidade(p_cidade);
        this.setBairro(p_bairro);
        this.setRua(p_rua);
        this.setNumero(p_numero);
    }

    get enderecoCompleto () {
        return `${this.getApelido()}\n${this.getRua()}, ${this.getNumero()} - ${this.getBairro()} - ${this.getCidade()} / ${this.getEstado()}`;
    }

}

const endereco = new Endereco('Trampo', 'SP', 'São Paulo', 'Pinheiros', 'Av. Faria Lima', '1306');
console.log(endereco.enderecoCompleto);