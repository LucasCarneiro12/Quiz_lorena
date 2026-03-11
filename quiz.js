const perguntas = [
    {
        pergunta: "Em que cidade eu moro atualmente?",
        opcoes: ["Trairi", "Fortaleza", "Caucaia", "Sobral"],
        correta: 1
    },
    {
        pergunta: "Qual dessas bandas eu mais gosto de ouvir?",
        opcoes: ["Radiohead", "Calcinha Preta", "Oasis", "Todas as anteriores!"],
        correta: 3
    },
    {
        pergunta: "Qual o nome da nossa primeira 'filha' de quatro patas?",
        opcoes: ["Mel", "Luna", "Amora", "Bela"],
        correta: 0 // Ajuste conforme a realidade de vocês!
    }
];

let perguntaAtual = 0;

function carregarPergunta() {
    const quizBox = document.getElementById('quiz-container');
    const titulo = document.getElementById('titulo-pergunta');
    const opcoesContainer = document.getElementById('opcoes-container');
    const feedback = document.getElementById('feedback');

    // Limpa o que estava antes
    opcoesContainer.innerHTML = "";
    feedback.textContent = "";

    const questao = perguntas[perguntaAtual];
    titulo.textContent = questao.pergunta;

    questao.opcoes.forEach((opcao, index) => {
        const botao = document.createElement('button');
        botao.textContent = opcao;
        botao.classList.add('btn-opcao');
        botao.onclick = () => verificarResposta(index, botao);
        opcoesContainer.appendChild(botao);
    });
}

function verificarResposta(index, botao) {
    const correta = perguntas[perguntaAtual].correta;
    
    if (index === correta) {
        botao.classList.add('correto');
        setTimeout(() => {
            perguntaAtual++;
            if (perguntaAtual < perguntas.length) {
                carregarPergunta();
            } else {
                finalizarQuiz();
            }
        }, 1000);
    } else {
        botao.classList.add('errado');
        document.getElementById('feedback').textContent = "Quase! Tenta de novo, amor... ❤️";
    }
}

function finalizarQuiz() {
    // Aqui redirecionamos para a surpresa final que você ainda vai criar
    window.location.href = "surpresa.html";
}

// Inicia o quiz
carregarPergunta();