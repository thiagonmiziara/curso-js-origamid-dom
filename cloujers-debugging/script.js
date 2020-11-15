debugger; // adiciona a palavra debugger
let item1 = 1;

function funcao1() {
    let item2 = 2;

    function funcao2() {
        let item3 = 3;
        console.log(item1);
        console.log(item2);
        console.log(item3);
    }
    funcao2();
}
funcao1();

///// caso classico

function contagem() {
    let total = 0;
    return function incrementar() {
        total++;
        console.log(total);
    }
}

const ativarIncrementar = contagem();
ativarIncrementar(); //1
ativarIncrementar(); //2
ativarIncrementar(); //3