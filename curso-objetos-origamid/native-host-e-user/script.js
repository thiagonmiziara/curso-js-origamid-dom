// exercicios

// liste 5 objetos nativos
Object
String
Array
Function
Number


// liste 5 objetos browser

window
history
Document
HTMLAllCollection
NodeList


// liste 2 Mètodos, Propriedades ou Objetos
// presente no Chrome que não existem no Firefox

if (typeof document.webkitHidden !== 'undefined') {
    console.log('Existe');
} else {
    console.log('Não existe');
}

if (typeof document.webkitVisibilityState !== 'undefined') {
    console.log('Existe');
} else {
    console.log('Não existe');
}

// Não existe no firefox  webkitVisibilityState  e  webkitHidden