const ano = 2018;
const preco = new Number(99);

console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN(4 + 5)); // false

console.log(Number.isInteger(20)); //true
console.log(Number.isInteger(23.6)); //false

console.log(parseFloat('99.50')); // mesma função sem o Number
console.log(Number.parseFloat('99.5')); // 99.5
console.log(Number.parseFloat('100 reais')); // 100
console.log(Number.parseFloat('R$ 100')); //NaN

console.log(parseInt('99.50', 10)); //99
console.log(parseInt(5.4343435555, 10)); //5
console.log(Number.parseInt('100 Reais', 10)); //100

const preco1 = 2.99;
console.log(preco1.toString(10)); //'2.99'
console.log(preco1.toFixed()); //3

const carro = 1000.455;
console.log(carro.toFixed(2)); //1000.46

const preco2 = 1499.49
console.log(preco2.toFixed()); //1499

const moeda = 59.49;
console.log(moeda.toLocaleString('en-US', { style: 'currency', currency: 'USD' })); //$59.49
console.log(moeda.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })); //R$59,49

//////////////objeto Math ///////////////

Math.PI; //3.14159
Math.E; //2.718
Math.LN10; //2.303
console.log(Math.PI, Math.E, Math.LN10);
console.log(Math.abs(-5.5)); // 5.5
console.log(Math.ceil(4.8334)); // 5
console.log(Math.ceil(4.3)); //5
console.log(Math.floor(4.8334)); // 4
console.log(Math.floor(4.3)); //4
console.log(Math.round(4.8334)); //5
console.log(Math.round(4.3)); //4

console.log(Math.max(5, 3, 10, 42, 2)); //42
console.log(Math.min(5, 3, 10, 42, 2)); //2

console.log(Math.random()); //0.xxx
console.log(Math.floor(Math.random() * 100)); // entre 0 e 100
console.log(Math.floor(Math.random() * 500)); // entre 0 e 500

// numero random entre 72 e 32
console.log(Math.floor(Math.random() * (72 - 32 + 1)) + 32);
//console.log(Math.floor(Math.random() * (max - min + 1)) + min);