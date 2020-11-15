// Iterable

const frutas = ['Banana', 'Morango', 'Uva'];
const frase = 'Isso é JavaScript';

fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(({ headers }) => console.log(headers));

// loop for of 
for (const fruta of frutas) {
    console.log(fruta);
};

for (const letra of frase) {
    // console.log(letra);
};

//////////////////////

const btns = document.querySelectorAll('button');
for (const btn of btns) {
    btn.style.background = 'red';
    console.log(btn);
}
///////////////////////
//Apenas Iteráveis

const carro = {
        marca: 'Honda',
        ano: 2020,
    }
    //erro , não e iteravel//
    //for (const car of carro) {
    //console.log(car);
    //};

// for in
for (const key in carro) {
    console.log(key, carro[key])
}
///////
////////////////// arrays e for in
const carros = ['Gol', 'Supra', 'Civic'];

for (const car in carros) {
    console.log(car); // mostra somente as chaves do array
}
for (const car in carros) {
    console.log(carros[car]); // mostra os valores do array
}

/// com o for in pode mostra a chave e o valor
const btn1 = document.querySelector('button');
const btnStyle = getComputedStyle(btn1);

for (const style in btnStyle) {
    console.log(`${style}:${btnStyle[style]}`);
}

///do/while
let i = 0;
do {
    console.log(i++)
} while (i <= 5);