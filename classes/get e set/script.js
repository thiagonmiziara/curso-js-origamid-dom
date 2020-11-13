const button = {
    get element() {
        return this._element;
    },
    set element(tipo) {
        this._element = document.createElement(tipo);
    }
}

button.element = 'button'; // set
button.element; // get (<button></button>);
console.log(button.element);

const matematica = {
    get PI() {
        return 3.14;
    }
}
matematica.PI; // get (3.14);
matematica.PI = 20; // nada acontece

const frutas = {
    lista: [],
    set nova(fruta) {
        this.lista.push(fruta);
    }
}
frutas.nova = 'Limão';
frutas.nova = 'Banana ';
frutas.nova = 'Morango';
frutas.lista; // ['Banana','Morango'];
frutas.lista.pop(); // retira o ultimo item do array

class Button {
    constructor(text, color) {
        this.text = text;
        this.color = color;
    }
    get element() {
        const type = this._elementType || 'button';
        const buttonElement = document.createElement(type);
        buttonElement.innerText = this.text;
        buttonElement.style.color = this.color;
        return buttonElement;
    }
    set element(type) {
        this._elementType = type;
    }
}

const blueButton = new Button('Comprar', 'blue');
blueButton.element; // retorna o elemento