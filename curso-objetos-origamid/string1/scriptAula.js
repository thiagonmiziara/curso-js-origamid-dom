const comida = 'Pizza';

const agua = new String('Água');

console.log(agua.length);
console.log(comida.length, comida[0]);

const frase = 'A melhor comida';
console.log(frase.length, frase[0], frase[frase.length - 1]);

const linguagem = 'JavaScript';

console.log(linguagem.charAt(0), linguagem.charAt(2), linguagem.charAt(linguagem.length - 1));

const frase1 = 'A melhor linguagem é ';
const fraseCompleta = frase1.concat(linguagem, '!!');
const fraseFinal = frase1 + linguagem;

console.log(fraseCompleta);

const fruta = 'Banana';
const listaFrutas = 'Melancia, Banana, Laranja';

console.log(listaFrutas.includes(fruta)); // true
console.log(fruta.includes(listaFrutas)); // false

console.log(fruta.endsWith('nana')); // true termina com
console.log(fruta.startsWith('Ba')); // true começa com 
console.log(fruta.startsWith('na')); // false

const transacao1 = 'Depósito de cliente';
const transacao2 = 'Depósito de fornecedor';
const transacao3 = 'Taxa de camisas';

console.log(transacao1.slice(0, 3)); // dep
console.log(transacao2.slice(0, 3)); //dep
console.log(transacao3.slice(0, 3)); //tax

console.log(transacao1.slice(12)); //cliente
console.log(transacao1.slice(-); console.log(linguagem.substring(3, 5)); //aS
        console.log(linguagem.substring(0, 4)); //Java
        console.log(linguagem.substring(4)); //Script
        console.log(linguagem.substring(-3)); //JavaScript

        const instrumento = 'Guitarra';

        console.log(instrumento.indexOf('r')); //5
        console.log(instrumento.lastIndexOf('r')); //6
        console.log(instrumento.indexOf('ta')); //3



        const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000']; listaPrecos.forEach((preco) => {
            console.log(preco.padStart(10, '.'));
        });

        console.log(listaPrecos[0].padStart(10, '.')); //......R$ 99
        console.log(listaPrecos[0].padEnd(10, '.')); // R$99......

        const ta = 'Ta'; console.log(ta.repeat(5)); // tatatatata

        let listaItens = 'Camisa Nonés Calças Bermudas Vestidos Saias'; console.log(listaItens = listaItens.replace(/[ ]+/g, ', '));

        let preco = 'R$ 1200,43'; console.log(preco = preco.replace(',', '.'));

        const listaItens2 = 'Camisa Nonés Calças Bermudas Vestidos Saias';
        const arrayItens = listaItens2.split(' '); console.log(arrayItens); constelhor item < /div><div>A melhor lista</div > ';
        console.log(htmlText);
        const htmlArray = htmlText.split('div'); console.log(htmlArray);

        const htmlNovo = htmlArray.join('section'); console.log(htmlNovo);

        const sexo1 = 'Feminino';
        const sexo2 = 'feminino';
        const sexo3 = 'FEMININO';

        console.log(sexo1.toLocaleLowerCase() === 'feminino'); // true
        console.log(sexo2.toLocaleLowerCase() === 'feminino'); // true
        console.log(sexo3.toLocaleLowerCase() === 'feminino'); // true

        const valor = '   R$ 23.00   ';

        console.log(valor.trim()); console.log(valor.trimStart()); console.log(valor.trimEnd());