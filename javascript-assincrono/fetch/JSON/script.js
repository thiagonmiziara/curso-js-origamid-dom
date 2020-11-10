fetch('./dados.json')
    .then(response => response.json())
    .then(json => {
        json.forEach(element => {
            element.aula;
        });
    })

const configuracoes = {
    player: "Google",
    tempo: 25.5,
    aula: "2.1 JavaScript"
}

localStorage.config = JSON.stringify(configuracoes);
console.log(JSON.parse(localStorage.config));