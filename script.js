const pedra = document.getElementById("pedra");
const papel = document.getElementById("papel");
const tesoura = document.getElementById("tesoura");

let pontosJogador = 0;
let pontosComputador = 0;

pedra.addEventListener("click", () => jogar("pedra"));
papel.addEventListener("click", () => jogar("papel"));
tesoura.addEventListener("click", () => jogar("tesoura"));

function jogar(escolhaJogador) {
  const opcoes = ["pedra", "papel", "tesoura"];
  const escolhaComputador = opcoes[Math.floor(Math.random() * 3)];

  let resultado = "";

  if (escolhaJogador === escolhaComputador) {
    resultado = "Empate!";
  } else if (
    (escolhaJogador === "pedra" && escolhaComputador === "tesoura") ||
    (escolhaJogador === "papel" && escolhaComputador === "pedra") ||
    (escolhaJogador === "tesoura" && escolhaComputador === "papel")
  ) {
    resultado = "Você venceu!";
    pontosJogador++;
  } else {
    resultado = "Computador venceu!";
    pontosComputador++;
  }

  document.getElementById("resultado").textContent =
    `Computador escolheu ${escolhaComputador}. ${resultado}`;

  document.getElementById("placar1").textContent = pontosJogador;
  document.getElementById("placar2").textContent = pontosComputador;
}
