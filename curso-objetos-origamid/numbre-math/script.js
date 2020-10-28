// retorne um numero aleatorio entre 1050 e 2000
const max = 2000;
const min = 1050;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);

// retorne o maior numero da lista abaixo
const numeros = '4,5,20,8,9';
const arrayNumeros = numeros.split(',');
console.log(Math.max(...arrayNumeros));



//crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total

const listaPrecos = ['R$ 59,99', ' R$100,222', 'R$ 230   ', 'r$ 200'];

function limparPreco(preco) {

    preco = +preco.toUpperCase().replace('R$', '').trim().replace(',', '.');
    preco = +preco.toFixed(2);
    return preco;
}

let soma = 0;
listaPrecos.forEach((item) => {

    soma += limparPreco(item)
});
console.log(soma.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))