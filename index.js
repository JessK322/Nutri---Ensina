function atualizarDataHora() {
    const agora = new Date();

    const opcoesData = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    const dataFormatada = agora.toLocaleDateString('pt-BR', opcoesData);
    const horaFormatada = agora.toLocaleTimeString('pt-BR');

    document.getElementById('data').textContent = dataFormatada;
    document.getElementById('hora').textContent = horaFormatada;
}

setInterval(atualizarDataHora, 1000);
atualizarDataHora();