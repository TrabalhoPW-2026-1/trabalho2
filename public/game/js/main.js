import { Game, getHighScore } from "./core/game.js";
import { setDifficulty } from "./config.js";
function showMenu() {
    const menu = document.getElementById("menu");
    const highScoreEl = document.getElementById("menu-highscore");
    const playBtn = document.getElementById("menu-play");
    const difficultyInputs = Array.from(document.querySelectorAll('input[name="difficulty"]'));
    const getSelectedDifficulty = () => {
        const selected = difficultyInputs.find(input => input.checked)?.value ?? "easy";
        return selected;
    };
    const refreshHighScoreLabel = () => {
        const hs = getHighScore(getSelectedDifficulty());
        highScoreEl.textContent = hs > 0 ? `Recorde: ${hs} pts` : "";
    };
    setDifficulty(getSelectedDifficulty());
    refreshHighScoreLabel();
    for (const input of difficultyInputs) {
        input.addEventListener("change", () => {
            setDifficulty(getSelectedDifficulty());
            refreshHighScoreLabel();
        });
    }
    menu.style.display = "flex";
    playBtn.addEventListener("click", () => {
        menu.style.display = "none";
        const game = new Game();
        game.start();
    }, { once: true });
}
showMenu();
