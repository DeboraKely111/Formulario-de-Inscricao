document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formInscricao");
  const mensagem = document.getElementById("mensagem-usuario");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Coleta dos dados do formulário
    const dados = {
      idUsuario: document.getElementById("idUsuario").value.trim(),
      senha: document.getElementById("senha").value.trim(),
      nome: document.getElementById("nome").value.trim(),
      email: document.getElementById("email").value.trim(),
      telefone: document.getElementById("telefone").value.trim(),
      trilha: document.querySelector("input[name='trilha']:checked")?.value,
      aceite: document.getElementById("aceite").checked
    };

    // Validação simples
    if (!dados.idUsuario || !dados.senha || !dados.nome || !dados.email || !dados.telefone || !dados.trilha || !dados.aceite) {
      alert("Por favor, preencha todos os campos obrigatórios e aceite os termos.");
      return;
    }

    // Salvando no localStorage com novo nome
    localStorage.setItem("dadosFormularioTrilhas", JSON.stringify(dados));

    // Mensagem de sucesso
    mensagem.style.display = "block";
    mensagem.innerHTML = `
      <strong>✅ Inscrição realizada com sucesso!</strong><br>
      <p>Seus dados foram armazenados com sucesso.</p>
      <p><strong>Nome:</strong> ${dados.nome}</p>
      <p><strong>Trilha:</strong> ${dados.trilha}</p>
    `;

    // Limpar formulário
    form.reset();
  });
});
