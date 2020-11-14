function somar(a, b) {
    return a + b;
}
somar(3, 3);
console.log(somar(3, 3));

////////// ex abaixo function expressio

const somar1 = function(a, b) {
    return a * b;
}
console.log(somar1(2, 4));

/// mais comum com arrow functio ex abaixo

const subtrair = (a, b) => a - b;
console.log(subtrair(5, 1));

const quadrado = a => a * a;
console.log(quadrado(4));

////// estrutura / preferencia

//declara como método de window
// vaza o escopo de bloco, como se fosse criada utilizando o VAR

function dividir(a, b) {
    return a / b;
}
const insturmento = 'Baixo';
console.log(insturmento);
(() => {
    const insturmento = 'Guitarra';
    console.log(insturmento)
})();