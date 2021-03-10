// transforme o objeto em uma constructor function

function Pessoa(nome, idade) {

    this.nome = nome;
    this.idade = idade;

    this.andou = () => {
        console.log(nome + ' andou');
    }
}

const thiago = new Pessoa('thiago', 33);
const bell = new Pessoa('Bell', 46);
const gabriella = new Pessoa('Gabriella', 13);
console.log(thiago, bell.andou(), gabriella.andou());

/////////////////////////////////////////////////////////////////////////////

function Dom(seletor) {

    const elementList = document.querySelectorAll(seletor);
    this.element = elementList;
    this.addClass = (classe) => {

        elementList.forEach((element) => {

            element.classList.add(classe);
        });
    }
    this.removeClass = (remove) => {

        elementList.forEach((element) => {

            element.classList.remove(remove)
        });
    }
}

const selectLi = new Dom('li');
const selectUl = new Dom('ul');
console.log(selectLi, selectUl)

selectLi.addClass('thiago');
selectUl.addClass('nunes');

selectUl.removeClass('nunes');
selectLi.removeClass('thiago');