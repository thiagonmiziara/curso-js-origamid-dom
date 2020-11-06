function espera(texto) {
    console.log('passou 0s');
}

setTimeout(() => {
    console.log('Após 2segundos');
}, 2000);

//// imediado ///

setTimeout(() => {
    console.log('Após 0s?');
});

/// loop com setTimeout///

for (let i = 0; i <= 2; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000 * i);
}

////////// this e Window ////////////

const btn = document.querySelector('button');
btn.addEventListener('click', handleClick);

function handleClick(event) {
    setTimeout(() => {
        this.classList.add('active');
    }, 1000);
}


//// setinterval

function loop(texto) {
    console.log(texto);
}
//setInterval(loop, 1000, 'Passou 1s');

// loop a cada segundo
//let i = 0;
//setInterval(() => {
// console.log(i++);
//}, 1000);
// clearInterval para usar tem que colocar o setInterval dentro de uma const 

const contarAte10 = setInterval(callback, 1000);

let i = 0;

function callback() {
    console.log(i++);
    if (i > 10) {
        clearInterval(contarAte10);
    }
}