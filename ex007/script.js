//armazena
const btn = document.querySelector('#btn');
const saida = document.querySelector('#saida');
const textoSaida = document.querySelector('#texto-saida');

//gatilho
btn.addEventListener('click', evento);

//evento

function evento(){
    textoSaida.innerText = 'Tocando... 🔊'
    saida.play();
}