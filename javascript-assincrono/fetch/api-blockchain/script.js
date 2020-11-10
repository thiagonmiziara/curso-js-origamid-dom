const btcDisplay = document.querySelector('.btc');


function fetchBtc() {
    fetch('https://blockchain.info/ticker')
        .then(response => response.json())
        .then(btcJason => {
            btcDisplay.innerText = ('R$ ' + btcJason.BRL.buy).replace('.', ',');
        })
}
//setInterval(fetchBtc, 1000 * 30);
fetchBtc();