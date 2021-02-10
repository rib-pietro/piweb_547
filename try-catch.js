function validarString(value) {
    if (typeof(value) !== 'string') throw "value deve ser uma string!";
}

try {
    validarString('aaaa');
    validarString('bbbb');
    validarString(123);
} catch {
    console.log('Tivemos um problema. Tente novamente mais tarde!');
}
