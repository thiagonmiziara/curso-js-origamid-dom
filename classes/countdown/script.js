import Countdown from './countdown.js';
const div = document.querySelector('.natal');

const tempoParaONatal = new Countdown('24 December 2020 23:59:59 GMT-0300');
const tempoParaOAnoNovo = new Countdown('31 December 2020 23:59:59 GMT-0300');

console.log(tempoParaONatal.total);
setInterval(() => {
    // console.log(tempoParaOAnoNovo.total);
}, 1000);
setInterval(() => {
    div.innerHTML = ` <div>Dias ${tempoParaONatal.total.days}</div>
    <div>Horas ${tempoParaONatal.total.hours}</div>
    <div>Minutos ${tempoParaONatal.total.minutes}</div>
    <div>Segundos ${tempoParaONatal.total.seconds}</div>`;
}, 1000)