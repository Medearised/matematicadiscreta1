const selectArea = document.getElementById("area");
const selectNivel = document.getElementById("nivel");

const perguntaEl = document.querySelector(".question");
const inputResposta = document.querySelector(".response input");
const botaoResponder = document.querySelector(".primary");
const botaoAjuda = document.querySelector(".secondary");
const botaoNovo = document.querySelector(".ghost");
const hintEl = document.querySelector(".hint");

let exercicioAtual = null;
let passoAjuda = 0;

function novoExercicio() {
  const area = selectArea.value;
  exercicioAtual = gerarExercicio(area);

  perguntaEl.textContent = exercicioAtual.pergunta;
  inputResposta.value = "";
  hintEl.textContent = "";
  passoAjuda = 0;
}

botaoNovo.addEventListener("click", novoExercicio);

botaoResponder.addEventListener("click", () => {
  const respostaUsuario = inputResposta.value.trim().toLowerCase();
  const respostaCorreta = exercicioAtual.resposta.toLowerCase();

  if (respostaUsuario === respostaCorreta) {
    alert("✅ Resposta correta!");
    novoExercicio();
  } else {
    alert("❌ Resposta incorreta. Tente novamente.");
  }
});

botaoAjuda.addEventListener("click", () => {
  if (!exercicioAtual) return;

  if (passoAjuda < exercicioAtual.ajuda.length) {
    hintEl.textContent = exercicioAtual.ajuda[passoAjuda];
    passoAjuda++;
  } else {
    hintEl.textContent = "Não há mais dicas para este exercício.";
  }
});

document.addEventListener("DOMContentLoaded", novoExercicio);