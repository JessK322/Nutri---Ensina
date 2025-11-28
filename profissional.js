const artigos = [
  {
    titulo: "O papel das fibras na saúde intestinal",
    resumo: "Estudos recentes mostram que a ingestão adequada de fibras melhora a microbiota e reduz riscos de doenças crônicas.",
    link: "https://www.scielo.br/j/abem/a/PZdwfM5xZKG8BmB9YH59crf/?format=html&lang=pt#:~:text=O%20consumo%20adequado%20de%20fibras,algumas%20desordens%20gastrointestinais%20(7)."
  },
  {
    titulo: "Impacto do consumo de açúcares no metabolismo",
    resumo: "O excesso de açúcares está associado a resistência à insulina e aumento do risco de diabetes tipo 2.",
    link: "https://www.cnnbrasil.com.br/saude/o-que-acontece-no-corpo-quando-comemos-muito-acucar-veja-impacto-diario/"
  },
  {
    titulo: "Importância da hidratação para o funcionamento do corpo",
    resumo: "A água é fundamental para quase todas as funções corporais, desde a regulação da temperatura até a eliminação de toxinas.",
    link: "https://viverbem.unimedbh.com.br/prevencao-e-controle/hidratacao/#:~:text=A%20importância%20da%20hidratação%20para%20o%20corpo%20humano,-A%20água%20está&text=Ela%20atua%20em%20processos%20como,pode%20prevenir%20os%20cálculos%20renais."
  }
];

function mostrarArtigos() {
  const container = document.getElementById('artigos');
  artigos.forEach(({titulo, resumo, link}) => {
    const artigoEl = document.createElement('div');
    artigoEl.classList.add('artigo');
    artigoEl.innerHTML = `
      <h3>${titulo}</h3>
      <p>${resumo}</p>
      <a href="${link}" target="_blank" rel="noopener noreferrer">Leia mais</a>
    `;
    container.appendChild(artigoEl);
  });
}

document.addEventListener('DOMContentLoaded', mostrarArtigos);

const mitosVerdades = [
  {
    tipo: "mito",
    texto: "Comer carboidrato engorda.",
    explicacao: "Os carboidratos são a principal fonte de energia do corpo. O que importa é a qualidade e a quantidade consumida, não eliminá-los totalmente."
  },
  {
    tipo: "verdade",
    texto: "Beber água ajuda a controlar o apetite.",
    explicacao: "A hidratação adequada pode ajudar a reduzir a fome excessiva, além de melhorar o funcionamento do organismo."
  },
  {
    tipo: "mito",
    texto: "Dietas detox limpam o organismo rapidamente.",
    explicacao: "O corpo já possui órgãos como fígado e rins que fazem a desintoxicação naturalmente. Dietas detox não têm comprovação científica robusta."
  },
  {
    tipo: "verdade",
    texto: "Frutas são essenciais para uma alimentação saudável.",
    explicacao: "Frutas fornecem vitaminas, fibras e antioxidantes importantes para a saúde geral e prevenção de doenças."
  },
  {
    tipo: "mito",
    texto: "Comer à noite engorda.",
    explicacao: "O que conta para o peso é o balanço calórico total do dia, não o horário que você come."
  }
];

function mostrarMitosVerdades() {
  const container = document.getElementById('lista-mitos');
  mitosVerdades.forEach(({tipo, texto, explicacao}) => {
    const item = document.createElement('div');
    item.classList.add('mito-verdade-item', tipo);
    item.innerHTML = `
      <h3>${texto}</h3>
      <p>${explicacao}</p>
    `;
    item.addEventListener('click', () => {
      item.classList.toggle('expanded');
    });
    container.appendChild(item);
  });
}

document.addEventListener('DOMContentLoaded', mostrarMitosVerdades);
