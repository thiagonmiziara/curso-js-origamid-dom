// Crie 4 li's na página
// Utilizando o for...of
// adicione uma classe a cada li
const lis = document.querySelectorAll('li');
for (const list of lis) {
    list.classList.add('ativo')
}

// Utilize o for...in para listar
// todos as propriedades e valores
// do objeto window

for (const key in window) {
    console.log(`${key}:${window[key]}`);
}