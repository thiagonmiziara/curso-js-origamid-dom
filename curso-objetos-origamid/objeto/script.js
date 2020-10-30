const pessoa = new Object({
    nome: 'Thiago'
});
console.log(pessoa);

const carro = {
    rodas: 4,
    init(marca) {
        this.marca = marca;
        return this;
    },
    acelerar() {
        return `${this.marca} acelerou as ${this.rodas} rodas`;
    },
    buzinar() {
        return this.marca + ' buzinou';
    }
}

const honda = Object.create(carro);
honda.init('Honda').acelerar();

const ferrari = Object.create(carro).init('Ferrari').acelerar();
console.log(ferrari);

/////////////////////////Object.assign(alvo,objeto1,objeto2)///////////

const funcaoAutomovel = {
    acelerar() {
        return 'Acelerou';
    },
    buzinar() {
        return 'buzinou';
    }
}

const moto = {
    rodas: 2,
    capacete: true,
}

const carro1 = {
    rodas: 4,
    mala: true,
}

Object.assign(moto, funcaoAutomovel);
Object.assign(carro1, funcaoAutomovel);

/////////////////////////Object.defineProperties(alvo,propriedades)////

const moto1 = {}
Object.defineProperties(moto, {
    rodas: {
        value: 2,
        configurable: false, // impede deletar e mudar o valor
        enumerable: true, //torna enumeravel
    },
    capacete: {
        value: true,
        configurable: true,
        writable: false, // impede mudar o valor
    },
});

//////////////////////// get e set/////////////////////////////

const moto2 = {}
Object.defineProperties(moto2, {
    velocidade: {
        get() {
            return this._velocidade
        }
    },
    set(valor) {
        this._velocidade = 'velocidade ' + valor;
    },
});