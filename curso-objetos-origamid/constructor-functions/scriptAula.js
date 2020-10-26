function Carro(marcaAtribuida, precoAtribuido) {
    this.marca = marcaAtribuida;
    this.preco = precoAtribuido;
}

const honda = new Carro('Honda', 5000);
console.log(honda)

const fiat = new Carro('Fiat', 2000);
console.log(fiat)

function Carro2(marca, precoInicial) {

    const taxa = 1.2;
    const precoFinal = precoInicial * taxa;

    this.marca = marca;
    this.preco = precoFinal;

    console.log(this);
}

const mazda = new Carro2('Mazda', 5000);
console.log(mazda);


/*const Dom = {

    seletor: 'li',
    element() {
        return document.querySelector(this.seletor);
    },
    ativo() {
        this.element().classList.add('ativo');
    }

}*/

/* 
Dom.ativo(); // adiciona ativo na li

Dom.seletor = 'ul';

Dom.ativo(); // adiciona ativo na ul
*/

// função construtora

function Dom(seletor) {

    this.element = () => document.querySelector(seletor);


    this.ativar = classe => this.element().classList.add(classe);

}

const li = new Dom('li');
const ul = new Dom('ul');

const lastLi = new Dom('li:last-child');
console.log(lastLi.ativar('ativo'));
console.log(li.ativar('ativo'));
console.log(ul.ativar('ativo'));