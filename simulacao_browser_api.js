/*
Questão 1

Crie uma classe chamada HTMLBaseElement que deve possuir os atributos:

    - tagName: string
    - id: string
    - classList: string[]
    - name: string
    - style: object

Todos os atributos são privados, e devem ser feitas as validações conforme o tipo de cada valor especificado acima.

No construtor da classe, fora o valor para tagName, nenhum é obrigatório, os valores default de cada atributo não obrigatório devem ser:

    id: undefined
    classList: []
    name: undefined
    style: {}

O atributo classList deverá poder ser manipulado através de um método addClass(className: string) que deve adicionar a classe passada como parâmetro no array em questão, e o método removeClass(className: string) para remover uma classe do array.
 */

function validarString(parametro, nomeDoParametro) {
    if (!(typeof(parametro) === 'string')) throw `${nomeDoParametro} não é uma string`
}

const _throw = mensagem => { throw mensagem }
const validarObjeto = obj => typeof obj === 'object'? obj : _throw('deve ser um objeto')

class HTMLBaseElement {
    constructor(tagName, id = undefined, classList = [], name = undefined, style = {}) {
        this.tagName = tagName
        this.id = id
        this.classList = classList
        this.name = name
        this.style = style
    }

    get tagName() {return this._tagName}
    set tagName(newtagName) {
        validarString(newtagName, 'tagName')
        this._tagName = newtagName
    }

    get id() {return this._id}
    set id(newid) {
        validarString(newid, 'id')
        this._id = newid
    }

    get classList() {return this._classList}
    set classList(newclassList) {
        try {
            newclassList.forEach(item => {
                validarString(item, 'item');
            });
            this._classList = newclassList;
        } catch (err) {
            throw "classList deve ser um array de strings";
        }
    }

    get name() {return this._name}
    set name(newName) {
        validarString(newName, 'name')
        this._name = newName;
    }

    get style() {return this._style}
    set style(newStyle) {
        this._style = validarObjeto(newStyle)
    }

    addClass(classname){
        this.classList = [...this.classList, classname];
    }

    removeClass(classname){
        validarString(classname, 'classname')
        let posicao = this._classList.indexOf(classname)
        if(posicao>=0){
            this._classList.splice(posicao,1)
        }
        else{
            throw 'Este elemento não existe'
        }
    }
}

class HTMLParentElement extends HTMLBaseElement {

    children = [];

    appendChild(child) {
        this._validateChild(child);
        this.children.push(child);
    }

    _validateChild(child) {
        if (!(child instanceof HTMLBaseElement)) throw "child must be of type HTMLBaseElement";
    }

    removeChildBy(property, value) {
        const foundIndex = this.children.findIndex(c => c[property] == value);
        if (foundIndex === -1) throw `Child with property ${property} = ${value} was not found`;
        this.children.splice(foundIndex, 1);
    }
}

class HTMLInputElement extends HTMLBaseElement {

    constructor(tagName, id = undefined, classList = [], name = undefined, style = {}, onClick) {
        super(tagName, id, classList, name, style);
        this.onClick = onClick;
    }

    get onClick() { return this._onClick; }
    set onClick(_onClick) {
        if (typeof(_onClick) !== 'function') throw "onClick attribute must be a function";
        this._onClick = _onClick;
    }
}

class HTMLTableElement extends HTMLParentElement {

    _validTags = ['thead', 'tbody', 'tfoot', 'tr', 'th']

    _validateChild(child) {
        super._validateChild(child);
        if (!this._validTags.includes(child.tagName)) throw `HTMLTableElement should have one of ${this._validTags.join(', ')}, not ${child.tagName}`;
    }

    appendChild(child) {
        this._validateChild(child);
        super.appendChild(child);
    }
}

class HTMLImageElement extends HTMLBaseElement {

    constructor(tagName, src, alt='', id = undefined, classList = [], name = undefined, style = {}) {
        super(tagName, id, classList, name, style);
        this.src = src;
        this.alt = alt;
    }

    get src() { return this._src; }
    set src(_src) {
        validarString(_src, 'src');
        this._src = _src;
    }

    get alt() { return this._alt; }
    set alt(_alt) {
        validarString(_alt, 'alt');
        this._alt = _alt;
    }
}


const h1 = new HTMLBaseElement('h1')