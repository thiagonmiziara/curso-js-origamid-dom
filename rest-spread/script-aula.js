// parâmetros
function perimetroForma(lado, totalLados = 4 /*metodo novo*/ ) {
    //metodo antigo totalLados = totalLados || 4;
    console.log(arguments);
    return lado * totalLados;
}
perimetroForma(10, 4); //40
perimetroForma(10); // Nan

/////// Parâmetro Rest

function anuciaGanhadores(premio, ...ganhadores) {
    ganhadores.map(ganhador => {
        console.log(`${ganhador} ganhou no triangulo da sorte um ${premio}`);
    });
}
anuciaGanhadores('Fiat Toro', 'Gabriel', 'Bell', 'Thiago');

//// Operador spread

const frutas = ['Banada', 'Uva', 'Morango'];
const legumes = ['Cenoura', 'Batata'];

const comidas = [...frutas, 'Pizza', ...legumes];
console.log(comidas);

/// Spread Argument

const numeroMaximo = Math.max(4, 5, 20, 10, 30, 2, 33, 5); //33
console.log(numeroMaximo);

const listaNumeros = [1, 13, 21, 12, 55, 2, 3, 43];
const numeroMaximoSpread = Math.max(...listaNumeros); //55
console.log(numeroMaximoSpread);

const btns = document.querySelectorAll('button');
const btnArray1 = Array.from(btns); // transforma em array
const btnArray = [...btns]; // transforma em Arrays
console.log(btns);
console.log(btnArray1.map(element => console.log(element)));
console.log(btnArray.forEach(element => console.log(element)));