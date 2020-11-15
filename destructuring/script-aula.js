const carro = {
    marca: 'Fiat',
    ano: 2020,
    portas: 4,
}
const { marca, ano, portas } = carro;
console.log(marca); // fiat
console.log(ano); // 2020
console.log(portas); // 4

//////////////////////// Destructuring Objects

const cliente = {
    nome: 'Gabriella',
    compras: {
        digitais: {
            livros: ['Livro 1', 'Livro 2'],
            videos: ['Video JS', 'Video HTML']
        },
        fisicas: {
            cadernos: ['Caderno 1']
        }
    }
}
console.log(cliente.compras.digitais.livros);
console.log(cliente.compras.digitais.videos);
//const { livros, videos } = cliente.compras.digitais;
//console.log(livros);
//console.log(videos);
//livros.map(element => console.log(element));//

/// destructing com aninhamento 
//const nome = cliente.nome;
const { fisicas, digitais, digitais: { livros, videos } } = cliente.compras;
videos.map(element => console.log(element));
//console.log(nome);
console.log(digitais);
console.log(livros);
console.log(videos);
console.log(fisicas);

const pessoaChata = {
    nome: 'Gabriella',
    idade: 13,
    email: "chatonilda@gmail.com"
}

const { nome: nomeGabi, idade, email = "email@gmail.com" } = pessoaChata;
console.log(`${nomeGabi} tem ${idade} anos e tem um email com esse endereço ${email}`);

////////////// destructuring Arrays /////////////
const frutas = ['Banana', 'Uva', 'Morango'];
//ex antigo 
const primeiraFruta = frutas[0];
const segundaFruta = frutas[1];
const terceiraFruta = frutas[2];
// ex  com destructuring
const [primeira, segunda, teceira] = frutas;
console.log(primeira);
console.log(segunda);
console.log(teceira);

// declaração de váriaveis

const um1 = 'item 1';
const dois2 = 'item 2';
const tres3 = 'item 3';
// ou
const [um, dois, tres] = ['item 1', 'item 2', 'item 3'];
console.log(um, dois, tres);


// argumento desestruturado

function handleKeyboard(event) {
    console.log(event.key);
}
// com destructuring
function handleKeyboard({ key }) {
    console.log(key);
}
//destructuring
document.addEventListener('keyup', handleKeyboard);