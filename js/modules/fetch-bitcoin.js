export default function initFetchBitoin(){
    
}

fetch('https://blockchain.info/ticker')
.then(response => response.json())
.then(bitcoin => {
    const btcPreco = document.querySelector('.btc-preco')
    btcPreco.innerText = `R$${(1000 / bitcoin.BRL.sell).toFixed(4)}`
}).catch(erro => {
    console.log(Error(erro))
})

