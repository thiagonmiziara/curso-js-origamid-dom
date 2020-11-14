class Veiculo {
    constructor(rodas) {
        this.rodas = rodas;
    }
    acelerar() {
        console.log('Acelerou!!!');
    }
}

class Moto extends Veiculo {
    acelerar() {
        super.acelerar();
        console.log('Acelerou muito!')
    }
    empinar() {
        console.log('Empinou com ' + this.rodas + ' rodas');
    }
}

const honda = new Moto(2);
honda.empinar();
honda.acelerar();

//////////////////////////////

class Carro {
    constructor(rodas, combustivel) {
        this.rodas = rodas;
        this.combustivel = combustivel;
    }
}

class Honda extends Carro {
    constructor(rodas, combustivel, capacete) {
        super(rodas, combustivel);
        this.capacete = capacete;
    }
}

const motoHonda = new Honda(2, 'Gasolina', true);
console.log(motoHonda)