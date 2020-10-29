/// array e iteração [].forEach(callback(itemAtual,index,array))

const carros = ['Ford', 'Fiat', 'Honda'];
/*carros.forEach(function(item, index, array) {
    console.log(item.toUpperCase());
});*/ // esee e o jeito mais verboso abaixo o jeito mais moderno com arrow function;

carros.forEach((item, index, array) => {
    console.log(item.toUpperCase(), index, array);
    console.log(array[index] = 'Carro ' + item);
});

// arrow function

const li = document.querySelectorAll('li');
li.forEach(i => i.classList.add('ativa'));

//[].map(callback(itemAtual,index,array));

const carros1 = ['Ford', 'Fiat', 'Honda'];
const newCarros = carros1.map((item) => {
    return 'Carro ' + item;
});
carros1; //["Ford", "Fiat", "Honda"]
newCarros; //["Carro Ford", "Carro Fiat", "Carro Honda"]

const numeros = [2, 4, 5, 6, 78];
const numerosx2 = numeros.map((item) => {
    return item * 2;
});
console.log(numerosx2);

const aulas = [{
        nome: 'HTML 1',
        min: 15
    },
    {
        nome: 'HTML 2',
        min: 10
    },
    {
        nome: 'CSS 1',
        min: 20
    },
    {
        nome: 'JS 1',
        min: 25
    },
]

const tempoAulas = aulas.map(aula => aula.min);
const nomeAulas = aulas.map(aula => aula.nome);


///////////////////////////////////////////////////////
//[].reduce(callback(acumulador,valorAtual,index,array),valorInicial);

const aulas1 = [10, 25, 30];

const total1 = aulas1.reduce((acumulador, item, index, array) => {
    return acumulador + item;
}, 0);
console.log(total1); // 65

const total2 = aulas1.reduce((acc, cur) => acc + cur, 100);
console.log(total2); //165

//maior valor com reduce

const numeros1 = [10, 25, 60, 5, 35, 10];

const maiorValor = numeros1.reduce((anterior, atual) => {
    if (anterior > atual) {
        return anterior;
    } else {
        return atual;
    }
    // return anterior < atual ? atual : anterior; // if ternario
}, 0);

console.log(maiorValor); // 60
////////////////////////////////////////////////////////////////

const aulas2 = [{
        nome: 'HTML 1',
        min: 15
    },
    {
        nome: 'HTML 2',
        min: 10
    },
    {
        nome: 'CSS 1',
        min: 20
    },
    {
        nome: 'JS 1',
        min: 25
    },
]

const listaAulas2 = aulas2.reduce((acumulador, aula, index) => {
    acumulador[index] = aula.nome;
    return acumulador;
}, {});

console.log(listaAulas2);

///////////// [].reduceRight();

const frutas = ['Banana', 'Pêra', 'Uva'];

const frutasRight = frutas.reduceRight((acc, fruta) => acc + ' ' + fruta);
frutasRight; //"Uva Pêra Banana";

const frutasLeft = frutas.reduce((acc, fruta) => acc + ' ' + fruta);
frutasLeft; //"Banana Pêra Uva"


////////[].some()

const frutas2 = ['Banana', 'Pêra', 'Uva'];

const temUva = frutas2.some((fruta) => {
    return fruta === 'Uva';
});

console.log(temUva); //true

function maiorQue100(numero) {
    return numero > 100;
}
const numeros2 = [0, 43, 22, 88, 101, 2];
const temMaior = numeros2.some(maiorQue100); // true

console.log(temMaior); //true

//////////[].every()

const frutas3 = ['Banana', 'Pêra', 'Uva', ''];
//false pois pelo menos uma fruta esta vazia ' ', o que é um valor false;
const arraysCheias = frutas3.every((fruta) => {
    return fruta;
});
console.log(arraysCheias); //false

const number = [6.43, 22, 88, 101, 29];
const maiorQue3 = number.every(x => x > 3);
console.log(maiorQue3); // true