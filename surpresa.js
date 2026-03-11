const texto = "Minha querida, cada dia ao seu lado é uma nova descoberta. Fiz esse site para mostrar que, assim como no código, nosso amor tem uma lógica perfeita: você me completa. Obrigado por ser minha parceira de vida...";

let index = 0;
const velocidade = 50; // milissegundos por letra

function digitar() {
    if (index < texto.length) {
        document.getElementById("texto-carta").innerHTML += texto.charAt(index);
        index++;
        setTimeout(digitar, velocidade);
    } else {
        // Mostra o botão após terminar de escrever
        document.getElementById("btn-proximo").style.display = "block";
    }
}

function mostrarMural() {
    // Esconde a carta
    document.getElementById("sessao-carta").style.display = "none";
    
    // Mostra o mural
    const mural = document.getElementById("sessao-mural");
    mural.style.display = "block";
    
    // Inicia a música
    const player = document.getElementById("musica");
    player.play();
}

// Inicia a digitação ao carregar a página
window.onload = digitar;