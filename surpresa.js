const texto = " Oi, amor! Você sabe que não sou de escrever, mas irei tentar. Nem sei por onde começar. Porém vamos lá. \
Depois que te conheci, minha visão de mundo mudou, e não consigo conceber um mundo em que o nós não exista. Sei que estamos passando pelo nosso momento mais difícil, é aquela fase que a paixão deixa de cegar a gente e você consegue ver claramente todos os meus defeitos, que eu ainda não sou aquele homem que você idealizou.\
Vou falar um pouco sobre o que eu sinto. Quando te vejo meu coração não acelera, pelo contrário, todos os músculos do meu ser relaxam, se descontraem, porque sei que estou em um lugar seguro. Meus olhos riem a toa só de pensar em você.\
Quero que você se sinta confortável comigo perto  e distante, que não precise temer nada, que se sinta cuidada, respeitada, amada. Que no futuro encaremos todas as dificuldades do nosso relacionamento à distância como uma grande prova que fortaleceu o nosso amor.\
Percebeu que em nenhuma parte dessa carta eu disse diretamente te amo, porque estou aprendendo que o amor não é apenas um sentimento de afeto, o amor é o que o amor faz. Tentei falar nessa carta como te amo sem precisar usar essa palavra. E prometo que vou te amar de todas as maneiras possíveis.\
";


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