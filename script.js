let saldo = 1000;
let apostaAtual = 0;
let tipoAposta = null;
let numeroAposta = null;

function fazerAposta(tipo) {
    const aposta = parseInt(document.getElementById('aposta').value);

    if (isNaN(aposta) || aposta < 1) {
        alert("Por favor, insira uma aposta válida.");
        return;
    }

    if (aposta > saldo) {
        alert("Saldo insuficiente.");
        return;
    }

    apostaAtual = aposta;
    tipoAposta = tipo;

    if (tipo === 'numero') {
        numeroAposta = parseInt(prompt("Escolha um número entre 1 e 36:"));
        if (isNaN(numeroAposta) || numeroAposta < 1 || numeroAposta > 36) {
            alert("Número inválido. Escolha um número entre 1 e 36.");
            tipoAposta = null;
            numeroAposta = null;
            return;
        }
    }

    alert(`Aposta de ${aposta} moedas feita em ${tipo}.`);
}

function jogar() {
    if (apostaAtual === 0 || tipoAposta === null) {
        alert("Por favor, faça uma aposta antes de girar a roleta.");
        return;
    }

    const roletaElemento = document.getElementById('roleta');
    const numeroSorteado = Math.floor(Math.random() * 36) + 1; // Números de 1 a 36
    const resultadoElemento = document.getElementById('resultado');
    const saldoElemento = document.getElementById('saldo');

    // Animação da roleta
    roletaElemento.style.transform = 'rotate(720deg)';
    setTimeout(() => {
        roletaElemento.style.transform = 'rotate(0deg)';
    }, 2000);

    // Atualiza o número sorteado após a animação
    setTimeout(() => {
        document.getElementById('numeroSorteado').textContent = numeroSorteado;

        let ganhou = false;

        switch (tipoAposta) {
            case 'vermelho':
                ganhou = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36].includes(numeroSorteado);
                break;
            case 'preto':
                ganhou = [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35].includes(numeroSorteado);
                break;
            case 'par':
                ganhou = numeroSorteado % 2 === 0;
                break;
            case 'impar':
                ganhou = numeroSorteado % 2 !== 0;
                break;
            case 'numero':
                ganhou = numeroSorteado === numeroAposta;
                break;
        }

        if (ganhou) {
            saldo += apostaAtual;
            resultadoElemento.textContent = `Você ganhou ${apostaAtual} moedas!`;
        } else {
            saldo -= apostaAtual;
            resultadoElemento.textContent = `Você perdeu ${apostaAtual} moedas.`;
        }

        // Atualiza o saldo
        saldoElemento.textContent = saldo;

        // Reseta a aposta
        apostaAtual = 0;
        tipoAposta = null;
        numeroAposta = null;
    }, 2000);
}
