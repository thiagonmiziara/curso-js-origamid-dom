// Extraia o backgroundColor, color e margin do btn
const btn = document.querySelector('button');
const btnStyles = getComputedStyle(btn);
const { backgroundColor, color, margin } = btnStyles;
console.log(backgroundColor);
console.log(color);
console.log(margin);


// Troque os valores das variáveis abaixo
let cursoAtivo = 'JavaScript';
let cursoInativo = 'HTML';
[cursoAtivo, cursoInativo] = [cursoInativo, cursoAtivo];
console.log(cursoAtivo);
console.log(cursoInativo);

// Corrija o erro abaixo
const cachorro = {
    nome: 'Bob',
    raca: 'Labrador',
    cor: 'Amarelo'
}

const { cor: bobCor } = cachorro;
console.log(bobCor);

const pessoa1 = {
    nome: 'Thiago',
    idade: 33,
    email: 'thiagonmiziara@gmail.com'
}

const { nome, idade, email = "email@hotmail.com" } = pessoa1;
console.log(`${nome} tem ${idade} anos e possui o seguinte email para contato ${email}`);