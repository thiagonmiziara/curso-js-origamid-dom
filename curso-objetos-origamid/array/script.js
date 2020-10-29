const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
//remova o primeiro valor de comidas e coloque em uma variavel
const pizza = comidas.shift();
//remova o ultimo valor de comias e coloque em uma variavel
const macarrao = comidas.pop();
// adicione 'Arroz' ao final do arrau;
comidas.push('Arroz');
//adicione 'Peixe' e 'Batata' ao inicio do array
comidas.unshift('Pixe', 'Batata')

const estudandes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
//arrume os estudantes em ordem alfábetica
estudandes.sort();
//inverta a ordem dos estudantes
estudandes.reverse();
// verifique se Joana faz parte dos estudantes
estudandes.includes('Joana'); //true
// verifique se Juliana faz parte dos estudantes
estudandes.includes('Juliana'); //false

let html = `<section>
                    <div>Sobre</div>
                    <div>Produdos</div>
                    <div>Contato</div>
                   </section> `;
//substitua section po ul e di por li, utilizando plit e join
html = html.split('section').join('ul').split('div').join('li');
console.log(html);

const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// remova o ultimo carro, mas antes de remover
//salve o array original em esoutra variavel

const arrayOriginal = carros.slice();
carros.pop();