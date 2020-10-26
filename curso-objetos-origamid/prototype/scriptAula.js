function Pessoa(nome, idade) {

    this.nome = nome;
    this.idade = idade;

    this.abracar = () => {
        return 'abraçou';
    }

    this.andar = () => {

        return ' andou pelo objeto';
    }

}

Pessoa.prototype.andar = function() {
    return this.nome + ' pessoa andou';
}


const thiago = new Pessoa("Thiago", 33);

//console.log(Pessoa.prototype);
//console.log(thiago.prototype);

const pais = 'Brasil';
const cidade = new String('Rio');

pais.charAt(0); // B
cidade.charAt(0); // R

String.prototype;


const listaAnimais = ['Cachorro', 'Gato', 'Cavalo'];

const lista = document.querySelectorAll('li');

//transforma em um array
const listaArray = Array.prototype.slice.call(lista);

Array.from(lista);

Object.getOwnPropertyNames(Array);


const Carro = {
    marca: 'ford',
    preco: 2000,
    andar() {
        return true;
    }
}