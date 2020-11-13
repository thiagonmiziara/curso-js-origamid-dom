function Button(text, background) {
    this.text = text;
    this.background = background;
}

Button.prototype.element = function() {
    const buttonElemnet = document.createElement('button');
    buttonElemnet.innerText = this.text;
    buttonElemnet.style.background = this.background;
    return buttonElemnet;
}

const blueButton = new Button('Comprar', 'blue');

console.log(blueButton.element());

// mesmo codigo acima so que utilizando class

class Btn {
    constructor(text, background) {
        this.text = text;
        this.background = background;
    }
    element() {
        const buttonElement = document.createElement('button');
        buttonElement.innerText = this.text;
        buttonElement.style.background = this.background;
        return buttonElement;
    }
}
const redButton = new Btn('vermelho', 'red');
console.log(redButton.element())

///////////////////////// novo exemplo

class Btn2 {
    constructor(text, background, color) {
        this.text = text;
        this.background = background;
        this.color = color;
    }
    element() {
        const buttonElement = document.createElement('button');
        buttonElement.innerText = this.text;
        buttonElement.style.background = this.background;
        buttonElement.style.color = this.color;
        return buttonElement;
    }
    appendTo(target) {
        const targetElement = document.querySelector(target);
        targetElement.appendChild(this.element());
        return targetElement;
    }
    static blackButton(text) {
        return new Btn2(text, 'black', 'red')
    }
}

const blackBtn = Btn2.blackButton('Mengão');
console.log(blackBtn.appendTo('body'))

//////////////////////////////////////

class Btn3 {
    constructor(options) {
        this.options = options;
    }
}

const btnOptions = {
    background: 'pink',
    color: 'black',
    text: 'eusouNEGAN',
    boderRadius: '5px',
}

const btnPink = new Btn3(btnOptions);
console.log(btnPink.options);


/////////////////////////////////////////////////////////////

class Btn4 {
    constructor(text) {
        this.text = text;
    }
    static create(background) {
        const elementButton = document.createElement('button');
        elementButton.style.background = background;
        elementButton.innerText = 'CLIQUE';
        return elementButton;
    }
}

const btnWhite = Btn4.create('white');
console.log(btnWhite);