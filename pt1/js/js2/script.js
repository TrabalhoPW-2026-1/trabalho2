function jokenpo(pts=0) {
    options = ["Pedra", "Papel", "Tesoura"];
    console.log("Escolha sua jogada:\n1 - Pedra\n2 - Papel\n3 - Tesoura");
    const input = require("fs").readFileSync("/dev/stdin", "utf-8").trim();
    try {
        u = options[parseInt(input) - 1];
    } catch (error) {
        return;
    }
    pc = options[Math.floor(Math.random() * 3)];
    console.log(`O computador jogou ${pc}`);
    if (u === pc) {
        console.log("A rodada empatou!");
        jokenpo(pts);
    } else if (
        u === "Pedra" && pc === "Tesoura"
        || u === "Papel" && pc === "Pedra"
        || u === "Tesoura" && pc === "Papel"
    ) {
        console.log("Você ganhou!");
        jokenpo(pts + 1);
    } else {
        console.log(`Você perdeu! A sua pontuação foi de ${pts}`);
    }
}
jokenpo();
