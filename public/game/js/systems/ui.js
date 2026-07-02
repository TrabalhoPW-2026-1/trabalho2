import { hud } from "../ui/hud.js";
export class UISystem {
    update(world) {
        hud.setScore(world.score);
        hud.setLives(world.lives);
        hud.setTipTimer(world.tipTimer, world.hasPizza);
        hud.setTurbo(world.turboTimeRemaining > 0);
    }
}
