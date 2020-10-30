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


////////////////////////////////////////function.apply()

const numeros = [3, 4, 6, 134, 44, 32];

Math.max.apply(null, numeros);
Math.max.call(null, 3, 4, 5, 6, 7, 20);

// Podemos passar null para o valor
// de this, caso a função não utilize
// o objeto principal para funcionar

const li1 = document.querySelectorAll('li');

function itemPossuiAtivo(item) {
    return item.classList.contains('ativo');
}

const filtro1 = Array.prototype.filter.call(li, itemPossuiAtivo);
const filtro2 = Array.prototype.filter.apply(li, [itemPossuiAtivo]);

//// functtion.bind()

const li2 = document.querySelectorAll('li');

const filtrarLi = Array.prototype.filter.bind(li, function(item) {
    return item.classList.contains('ativo');
})

console.log(filtrarLi()); // [li.ativo]


const carro = {
    marca: 'Ford',
    ano: 2018,
    acelerar: function(aceleracao, tempo) {
        return `${this.marca} acelerou ${aceleracao}Km em ${tempo} segundos`;
    }
}

carro.acelerar(100, 20); // ""Ford acelerou 100Km em 20 segundos"

const honda = {
    marca: 'Honda'
}

const acelerarHonda = carro.acelerar.bind(honda);
acelerarHonda(200, 10); //"Honda acelerou 200Km em 10 segundos"


/////argumentos comuns

function imc(altura, peso) {
    return peso / (altura * altura);
}

const imc180 = imc.bind(null, 1.80);
imc(1.80, 70); //21.6
imc180(70); //21.6