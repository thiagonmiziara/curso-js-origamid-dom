const precos = [49, 99, 69, 89];

const dados = [new String('Tipo 1'), ['Carro', 'Portas', { cor: 'Azul', preco: 2000 }], function andar(nome) { console.log(nome) }];

dados[2]('Ford');
dados[1][2].cor; // Azul

// construçao de array

const carros = new Array('Corola', 'Mustang', 'Honda');
carros[1] // Mustang
carros[2] = 'Ferrari';
carros[10] = 'Parati';
carros.length; //11

//array.from() // Array.isArray()

let li = document.querySelectorAll('li'); //nodelist
console.log(Array.isArray(li)); // false

li = Array.from(li); //Array
console.log(Array.isArray(li)); // true

const carros1 = {
    0: 'Fiat',
    1: 'Honda',
    2: 'Ford',
    length: 3,
}
const carrosArray = Array.from(carros1);

Array.of(10); // [10]
Array.of(1, 2, 3, 4); // [1,2,3,4]
new Array(5); //[.....]
Array(5); //[.....]
Array(1, 2, 3, 4); //[1,2,3,4]

const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']];
console.log(frutas);
frutas.length; //3

frutas[0].length; //6
frutas[1].length; //4
frutas[2].length; //2

// Métodos Modificadores[].sort()

const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
instrumentos.sort(); //organiza em ordem alfabetica
instrumentos; //['Guitarra', 'Baixo', 'Violão'];

const idades = [32, 21, 33, 43, 1, 12, 8];
idades.sort();
idades; // [32, 21, 33, 43, 1, 12, 8]

//[].unshift() e [].push() // [].shift() e [].pop()// [].reverse()

const cars = ['Ford', 'Fiat', 'VW'];
cars.unshift('Honda,', 'Kia'); // 5
cars; //["Honda,", "Kia", "Ford", "Fiat", "VW"]

cars.push('Ferrari'); // 6
cars; //["Honda,", "Kia", "Ford", "Fiat", "VW", "Ferrari"]

const primeiroCarrro = cars.shift();
cars; // ["Kia", "Ford", "Fiat", "VW", "Ferrari"]

const ultimoCarro = cars.pop();
cars; //["Kia", "Ford", "Fiat", "VW"]

cars.reverse(); //["VW", "Fiat", "Ford", "Kia"]