document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const user = document.getElementById('username').value.toLowerCase();
    const pass = document.getElementById('password').value;
    const message = document.getElementById('message');

    // Defina aqui o nome e a senha (ex: data do namoro)
    const usuarioCorreto = "lorena"; 
    const senhaCorreta = "2502"

    if (user === usuarioCorreto && pass === senhaCorreta) {
        // Redireciona para a página do quiz
        window.location.href = "quiz.html";
    } else {
        message.textContent = "Tente novamente, amor... eu sei que você sabe! ❤️";
    }
});