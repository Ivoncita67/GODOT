// Variáveis
let nomeHeroi = "Fulano";
let experienciaHeroi = 7500;
let nivelHeroi;

// Estrutura de decisão
if (experienciaHeroi < 1000) {
    nivelHeroi = "Ferro";
} else if (experienciaHeroi >= 1001 && experienciaHeroi <= 2000) {
    nivelHeroi = "Bronze";
} else if (experienciaHeroi >= 2001 && experienciaHeroi <= 5000) {
    nivelHeroi = "Prata";
} else if (experienciaHeroi >= 5001 && experienciaHeroi <= 7000) {
    nivelHeroi = "Ouro";
} else if (experienciaHeroi >= 7001 && experienciaHeroi <= 8000) {
    nivelHeroi = "Platina";
} else if (experienciaHeroi >= 8001 && experienciaHeroi <= 9000) {
    nivelHeroi = "Ascendente";
} else if (experienciaHeroi >= 9001 && experienciaHeroi <= 10000) {
    nivelHeroi = "Imortal";
} else {
    nivelHeroi = "Radiante";
}

// Saída
console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivelHeroi}`);