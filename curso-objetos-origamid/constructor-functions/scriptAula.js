var videoGames = ['Switch', 'Ps4', 'Xbox', '3DS'];

for (var i = 0; i < videoGames.length; i++) {
    console.log(videoGames[i]);
    if (videoGames[i] === 'Ps4') {
        break;
    }
}

var videoGames1 = ['Switch', 'Ps4', 'Xbox', '3DS'];
videoGames1.forEach(function(games) {
    console.log(games);
});

var frutas = ['Banana', 'Pera', 'Maçã', 'Abacaxi', 'Uva'];
frutas.forEach(function(fruta, index, array) {
    frutas.pop();
    console.log(fruta, index, array);
});
/*
videoGames.pop();
var ultimoItem = videoGames.pop('3DS')

videoGames.push("3DS");

videoGames.length;

*/

for (var numero = 0; numero <= 5; numero++) {
    console.log(numero);
}

var i = 0;
while (i <= 3) {
    console.log(i)
    i++;
}


var numero = 0;
var maximo = 50;
for (; numero <= 50;) {
    console.log(numero);
    numero++;
}