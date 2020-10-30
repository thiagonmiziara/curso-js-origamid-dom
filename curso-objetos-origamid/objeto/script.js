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

////////////////OBJECT.GETOWNPROPERTYDESCRIPTORS(OBJ)////////

Object.getOwnPropertyDescriptors(Array);
// Lista com métodos e propriedades e Array

Object.getOwnPropertyDescriptors(Array.prototype);
// Lista com métodos e propriedades do protótipo de Array

Object.getOwnPropertyDescriptor(window, 'innerHeight');
// Puxa de uma única propriedade


////////////OBJECT.KEYS(OBJ), OBJECT.VALUES(OBJ) OBJECT.ENTRIES(OBJ)///

Object.keys(Array);
//[] vazia, pois não possui propriedades enumeráveis

const carro3 = {
    marca: 'Ford',
    ano: 2018,
}
Object.keys(carro3);
// ['marca', 'ano']
Object.values(carro3);
// ['Ford', 2018]
Object.entries(carro3);
// [['marca', 'Ford'], ['ano', 2018]]



/////////OBJECT.GETOWNPROPERTYNAMES(OBJ)//////////

Object.getOwnPropertyNames(Array);
// ['length', 'name', 'prototype', 'isArray', 'from', 'of']

Object.getOwnPropertyNames(Array.prototype);
// [..., 'filter', 'map', 'every', 'some', 'reduce', ...]

const carro4 = {
    marca: 'Ford',
    ano: 2018,
}
Object.getOwnPropertyNames(carro4);
// ['marca', 'ano']

/////////OBJECT.GETPROTOTYPEOF() E OBJECT.IS()///////

const frutas = ['Banana', 'Pêra']
Object.getPrototypeOf(frutas);
Object.getPrototypeOf(''); // String

const frutas1 = ['Banana', 'Pêra'];
const frutas2 = ['Banana', 'Pêra'];

Object.is(frutas1, frutas2); // false

///OBJECT.FREEZE(), OBJECT.SEAL(), OBJECT.PREVENTEXTENSIONS()///

const carro5 = {
    marca: 'Ford',
    ano: 2018,
}
Object.freeze(carro5);
Object.seal(carro5);
Object.preventExtensions(carro5);

Object.isFrozen(carro5); // true
Object.isSealed(carro5); // true
Object.isExtensible(carro5); // FALSE