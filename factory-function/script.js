function createButton(text) {
    function element() {
        const buttonElement = document.createElement('button');
        buttonElement.innerText = text;
        return buttonElement;
    }
    return {
        element,
        text
    }
}

const comprarBtn = createButton('comprar');
console.log(comprarBtn);

//// Métodos / variáveis privadas

//function criarPessoa(nome, sobrenome) {
//    const nomeCompleto = `${nome} ${sobrenome}`;
//
//    function andar() {
//        return `${nomeCompleto} andou`;
//    }
//
//    function nadar() {
//        return `${nomeCompleto} nadou`
//    }
//    return {
//        nome,
//        sobrenome,
//        andar,
//        nadar,
//    }
//}
'use strict';

function criarPessoa(nome, sobrenome) {
    const nomeCompleto = `${nome} ${sobrenome}`;

    function andar() {
        return `${nomeCompleto} andou`;
    }

    return Object.freeze({
        nome,
        sobrenome,
        andar,
    });
}
////////////////////// constructor function / factory functio
function Pessoa(nome) {
    if (!(this instanceof Pessoa)) // ou (!new.target)
        return new Pessoa(nome);
    this.nome = nome;
}

Pessoa.prototype.andar = function() {
    return `${this.nome} andou`;
}

const estudante = Pessoa('Thiago');
console.log(estudante);