/*
const perimetro = new Function('lado', 'return lado * 4');

function somar(n1, n2) {
    return n1 + n2;
}
console.log(somar(3, 3));
somar.length;
somar.name;

///////////////////////

//function.call(this,arg1,arg2,...);

const carro = {
    marca: 'Ford',
    ano: 2018
}

function descicaoCarro() {
    console.log(this.marca + ' ' + this.ano);
}

descicaoCarro(); // undefined undefined
descicaoCarro.call(); //undefined undefined
descicaoCarro.call(carro); //Ford 2018

const arrayCarros = ['Ford', 'Fiat', 'VW'];
const arrayFrutas = ['Banana', 'Uva', 'Pêra'];

arrayCarros.forEach.call(arrayFrutas, (item) => {
    console.log(item);
});

function Dom(seletor) {
    this.element = document.querySelector(seletor);
};

Dom.prototype.ativo = function(classe) {
    console.log(this);
    this.element.classList.add(classe);
};

const lista = new Dom('ul');
lista.ativo('ativar');
console.log(lista);

const novoSeletor = {
    element: document.querySelector('li')
}

Dom.prototype.ativo.call(novoSeletor, 'ativar');
console.log(novoSeletor);
*/

/////// arrays e call

Array.prototype.mostreThis = function() {
    console.log(this);
}
const frutas = ['Uva', 'Maçã', 'Banana'];

frutas.mostreThis(); //(3) ["Uva", "Maçã", "Banana"]

console.log(Array.prototype.pop.call(frutas)); // remove Banana
frutas.pop(); // mesma coisa que a função acima;

/// array like

const li = document.querySelectorAll('li');
console.log(li);

const filtro = Array.prototype.filter.call(li, function(item) {

    return item.classList.contains('ativo');
});

console.log(filtro); // retorna os item que possuiem ativo