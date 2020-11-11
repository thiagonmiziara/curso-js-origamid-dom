const inputCep = document.querySelector('#cep');
const btnCep = document.querySelector('#btnCep');
const rua = document.querySelector('#rua');
const bairro = document.querySelector('#bairro');
const cidade = document.querySelector('#cidade');
const uf = document.querySelector('#uf');

btnCep.addEventListener('click', handleClick);

function handleClick(event) {
    event.preventDefault();
    const cep = inputCep.value;
    buscaCep(cep);
}

async function buscaCep(cep) {
    try {
        const viaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const jsonViaCep = await viaCep.json();
        rua.value = (jsonViaCep.logradouro);
        bairro.value = (jsonViaCep.bairro);
        cidade.value = (jsonViaCep.localidade);
        uf.value = (jsonViaCep.uf);
    } catch (erro) {
        alert('Digite um Cep válido!');
    }
}

/* Exemplo com fetch sem async-await
fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => response.json())
    .then(body => {
        let conteudo = body;
        rua.value = (conteudo.logradouro);
        bairro.value = (conteudo.bairro);
        cidade.value = (conteudo.localidade);
        uf.value = (conteudo.uf);
    });
    */
inputCep.value = localStorage.cep;
const salvaDados = function() {
    const inputCep = document.querySelector('#cep').value
    localStorage.setItem('cep', inputCep);
}
document.onchange = salvaDados;