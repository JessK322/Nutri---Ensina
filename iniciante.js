const alimentos = [
  { nome: "Alface", img: "img/alface.png" },
  { nome: "Alface Roxa", img: "img/roxa.png" },
  { nome: "Rúcula", img: "img/rucula.png" },
  { nome: "Espinafre", img: "img/espinafre.png" },
  { nome: "Couve", img: "img/couve.png" },
  { nome: "Salsa", img: "img/salsa.png" },
  { nome: "Cebolinha", img: "img/cebolinha.png" },
  { nome: "Coentro", img: "img/coentro.png" },
  { nome: "Repolho", img: "img/repolho.png" },
  { nome: "Brócolis", img: "img/brocolis.png" },
  { nome: "Cenoura", img: "img/cenoura.png" },
];

function hashString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

function alimentosDoDia(qtd) {
  const agora = new Date();
  const hora = agora.getHours();

  let periodo = "";
  if (hora >= 1 && hora < 12) {
    periodo = "manha";
  } else if (hora >= 12 && hora < 18) {
    periodo = "tarde";
  } else {
    periodo = "noite";
  }

  const chave = `${agora.getFullYear()}-${agora.getMonth()}-${agora.getDate()}-${periodo}`;
  const seed = hashString(chave);

  const escolhidos = [];
  const indices = [...alimentos.keys()];

  for (let i = 0; i < qtd && indices.length > 0; i++) {
    const idx = (seed + i * 7) % indices.length;
    const escolhido = indices.splice(idx, 1)[0];
    escolhidos.push(alimentos[escolhido]);
  }

  return { escolhidos, periodo };
}

function mostrarAlimentosDoDia() {
  const container = document.getElementById("cards-alimentos");
  const titulo = document.querySelector(".alimentos h2");
  const { escolhidos, periodo } = alimentosDoDia(3);

  if (periodo === "manha") {
    titulo.textContent = "Sugestões para o seu café da manhã";
  } else if (periodo === "tarde") {
    titulo.textContent = "Dicas para o seu almoço / lanche";
  } else {
    titulo.textContent = "Inspirações para o seu jantar";
  }

  container.innerHTML = "";

  escolhidos.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = item.img;
    img.alt = item.nome;

    const tituloCard = document.createElement("h3");
    tituloCard.textContent = item.nome;

    card.appendChild(img);
    card.appendChild(tituloCard);
    container.appendChild(card);
  });
}

function calcularIMC() {
  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("altura").value);
  const resultado = document.getElementById("resultado");

  if (!peso || !altura || altura <= 0) {
    resultado.innerText = "Por favor, preencha os campos corretamente.";
    resultado.style.color = "red";
    return;
  }

  const imc = peso / (altura * altura);
  let classificacao = "";

  if (imc < 18.5) classificacao = "Abaixo do peso";
  else if (imc < 24.9) classificacao = "Peso normal";
  else if (imc < 29.9) classificacao = "Sobrepeso";
  else classificacao = "Obesidade";

  resultado.innerText = `Seu IMC é ${imc.toFixed(2)} (${classificacao})`;
  resultado.style.color = "#000000ff";
}

document.addEventListener("DOMContentLoaded", () => {
  mostrarAlimentosDoDia();
});
