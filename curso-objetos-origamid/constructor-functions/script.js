function Carro(marcaAtribuida, precoAtribuido) {
    this.marca = marcaAtribuida;
    this.preco = precoAtribuido;
}

const honda = new Carro('Honda', 5000);
console.log(honda)

const fiat = new Carro('Fiat', 2000);
console.log(fiat)