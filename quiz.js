const perguntas = [
    {
        pergunta: "No dia 9 de feveriro de 2023 eu respondi pela primeira vez um story seu para começar a puxar  assunto. Qual era o conteúdo dessa mensagem?",
        opcoes: ["Eita como treina",
            "Pq falou comigo na academia?",
            "Não foi para a academia hj",
            "Está indo treinar com quem agora?"],
        correta: 2
    },
    {
        pergunta: "Em que dia foi o nosso primeiro beijo?(sem mentir)",
        opcoes: ["25/02/2023",
             "12/02/2023",
              "12/06/2023",
               "24/02/2023"],
        correta: 3
    },
    {
        pergunta: "Qual é o nome da nossa música?",
        opcoes: ["Pelados em Santos",
             "Oi",
              "Imprevisto",
               "Final de estrada"],
        correta: 0 
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