document.querySelectorAll(".btnPlus").forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.getAttribute("data-target");
    const answer = document.getElementById(targetId);
    // Verifica se o parágrafo correspondente foi encontrado e alterna a classe
    if (answer) {
      answer.classList.toggle("hidden");
    }
  });
});
