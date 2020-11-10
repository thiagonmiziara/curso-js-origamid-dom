const css = fetch('./style.css');
css.then(response => {
    return response.text();
}).then((body) => {
    const conteudo = document.querySelector('.conteudo');
    const style = document.createElement('style');
    style.innerHTML = body
    conteudo.appendChild(style)
    console.log(style)
});
//////////////////////////////////////////////////////

const sobreHtml = fetch('./sobre.html');
const div = document.createElement('div');

sobreHtml.then(response => {
    return response.text();
}).then((body) => {
    div.innerHTML = body;
    const titulo = div.querySelector('h1');
    document.querySelector('h1').innerText = titulo.innerText;
});

/////////////////////////////////////////////////////////


const img = fetch('./imagem.png');
img.then(response => response.blob())
    .then(imgBlob => {
        const blobUrl = URL.createObjectURL(imgBlob);
        const imgNoDom = document.querySelector('img')
        imgNoDom.src = blobUrl;
    });

//////////////////////////////////////////////////

//const cep = fetch('https://viacep.com.br/ws/38408652/json/');
//cep.then(response => {
//  const res2 = response.clone();
//  response.text().then((text) => {
//      console.log(text)
//  })
//  res2.json().then((json)=>{
//
//      console.log(json)
//  })
//
//hen(body => {
//  console.log(body)
/////////////////////////////////////////
//const div1 = document.createElement('div');
//const cep = fetch('https://viacep.com.br/ws/38408652/json/');
//cep.then(response => {
//    response.headers.forEach(console.log);
//}) /////

//////////
const div1 = document.createElement('div');
const cep = fetch('https://viacep.com.br/ws/38408652/json/');
cep.then(response => {
    console.log(response.status, response.type);
    if (response.status === 404) {
        console.log('Página não econtrada!')
    }
});

////////////////////