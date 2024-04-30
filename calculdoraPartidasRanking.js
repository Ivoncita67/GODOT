//Este código implementa uma Calculadora de partidas Rankeadas
//Função para determinar o saldo de partidas e o nível do Heroi
function calculadora(vitoriasJ, derrotasJ) {
    let nivelHeroi;
    let saldoRanqueadasJ = vitoriasJ - derrotasJ;

    // Estrutura de decisão para determinar o nível do herói com base no saldo do ranqueamento
    if (saldoRanqueadasJ < 10) {
        nivelHeroi = "Ferro";
    } else if (saldoRanqueadasJ >= 11 && saldoRanqueadasJ <= 20) {
        nivelHeroi = "Bronze";
    } else if (saldoRanqueadasJ >= 21 && saldoRanqueadasJ <= 50) {
        nivelHeroi = "Prata";
    } else if (saldoRanqueadasJ >= 51 && saldoRanqueadasJ <= 80) {
        nivelHeroi = "Ouro";
    } else if (saldoRanqueadasJ >= 81 && saldoRanqueadasJ <= 90) {
        nivelHeroi = "Diamante";
    } else if (saldoRanqueadasJ >= 91 && saldoRanqueadasJ <= 100) {
        nivelHeroi = "Lendário";
    } else {
        nivelHeroi = "Imortal";
    }

    // Saída
    console.log("O Herói tem saldo de " + saldoRanqueadasJ + " e está no nível " + nivelHeroi);
}
//Laço for para testes
for (let vitorias = 0; vitorias <= 500; vitorias += 50) {
    for (let derrotas = 0; derrotas <= 100; derrotas += 20) {
        calculadora(vitorias, derrotas);
    }
}