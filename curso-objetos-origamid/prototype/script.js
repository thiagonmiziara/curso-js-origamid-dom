function Pessoa(nome, sobrenome, idade) {

    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
}

Pessoa.prototype.nomeCompleto = function() {

    return `${this.nome} ${this.sobrenome}`;
}

const thiago = new Pessoa("Thiago", "Nunes", 33);


Object.getOwnPropertyNames(NodeList.prototype);
Object.getOwnPropertyNames(HTMLAllCollection.prototype);
Object.getOwnPropertyNames(Document.prototype);

//liste o constructror dos elemnetos abaixo
const li = document.querySelector('li');

li; // HTMLLIElement
li.click; // function
li.innerText; // String
li.value; // number
li.hidden; // Boolean
li.offsetLeft; // number
li.click(); // undefined

// Qual o constructor do dado abaixo;

li.hidden.constructor.name; // String