const data = new Date('Wed Feb 1 2021 19:36:05 GMT-0300 (Brasilia Standard Time)');

const dataStr = data.toString(); // faz a conversão de timezone (TZ) para o timezone especificado no servidor

data.getTime(); // retorna a quantidade de milisegundos passados desde 1/01/1970

data.getDate(); // retorna o dia do mês em 1..[.28, 30, 31]

data.toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo'});

function registrarPonto() {
    const novoPonto = {
        date: new Date(),
        type: 'in'
    };
    return novoPonto;
}

console.log(data.toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo'}));