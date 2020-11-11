//fetch('https://pokeapi.co/api/v2/pokemon/')
//    .then(response => response.json())
//    .then(pokemon => {
//        console.log(pokemon);
//    });

const url = 'https://jsonplaceholder.typicode.com/posts/';

fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        body: '{"titulo": "JavaScript"}'
    })
    .then(response => response.json())
    .then(resposta => console.log(resposta));
////////////////////////////////////////////////

const url2 = 'https://jsonplaceholder.typicode.com/posts/1/';
fetch(url2, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        body: '{"titulo": "JavaScript"}'
    })
    .then(r => r.json())
    .then(r => console.log(r))

//////////////////////////////////////////////////
const url3 = 'https://cors-anywhere.herokuapp.com/https://www.google.com/';
const div = document.createElement('div');

fetch(url3)
    .then(r => r.text()).then(r => {
        div.innerHTML = r;
        console.log(div);
    });