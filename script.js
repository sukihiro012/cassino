let saldo = 1000;

function jogar() {
    const aposta = parseInt(document.getElementById('aposta').value);
    const numeroSorteado = Math.floor(Math.random() * 36) + 1; // Números de 1 a 36
    const resultadoElemento = document.getElementById('resultado');
    const saldoElemento = document.getElementById('saldo');

    if (isNaN(aposta) || aposta < 1) {
        resultadoElemento.textContent = "Por favor, insira uma aposta válida.";
        return;
    }

    if (aposta > saldo) {
        resultadoElemento.textContent = "Saldo insuficiente.";
        return;
    }

    // Atualiza a roleta
    document.getElementById('numeroSorteado').textContent = numeroSorteado;

    // Verifica o resultado
    if (numeroSorteado % 2 === 0) {
        saldo += aposta; // Ganhou
        resultadoElemento.textContent = `Você ganhou ${aposta} moedas!`;
    } else {
        saldo -= aposta; // Perdeu
        resultadoElemento.textContent = `Você perdeu ${aposta} moedas.`;
    }

    // Atualiza o saldo
    saldoElemento.textContent = saldo;

    // Limpa o campo de aposta
    document.getElementById('aposta').value = '';
}
