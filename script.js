const frases = [
    "Aproveitar cada instante da vida é fundamental para a felicidade plena",
    "Nunca desista dos seus sonhos, pois eles podem transformar sua vida",
    "A persistência é a chave que abre as portas para alcançar grandes vitórias",
    "Cada novo dia é uma oportunidade incrível para aprender e evoluir sempre",
    "Valorize as pequenas coisas da vida, pois elas fazem toda a diferença"
];

let frase = frases[Math.floor(Math.random() * frases.length)];
let posicao = 0;

const fraseContainer = document.getElementById('phrase-container');

function mostrarFrase() {
    fraseContainer.innerHTML = "";

    for (let i = 0; i < frase.length; i++) {
        const span = document.createElement('span');
        span.textContent = frase[i];

        if (i === posicao) {
            span.style.backgroundColor = "yellow";
        }

        fraseContainer.appendChild(span);
    }
}

mostrarFrase(); 

const carro = document.getElementById('car');

document.addEventListener('keydown', function(event) {
    const tecla = event.key;

    if (tecla === frase[posicao]) {
        posicao++;
        carro.style.left = (posicao * 22) + "px";
    } else {
        const spans = fraseContainer.querySelectorAll('span');
        spans[posicao].style.backgroundColor = "red";
        return;
    }

    mostrarFrase();

    if (posicao >= frase.length) {
        alert("Parabéns!");
    }
});
