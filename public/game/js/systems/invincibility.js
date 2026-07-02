import { Player } from "../entities/player.js";
export class InvincibilitySystem {
    update(world) {
        for (const entity of world.entities) {
            if (!(entity instanceof Player))
                continue;
            if (!entity.activateInvincibility)
                continue;
            entity.invincibilityTimeRemaining--;
            const blink = Math.floor(entity.invincibilityTimeRemaining / 10) % 2 === 0;
            entity.element.style.opacity = blink ? "1" : "0.3";
            if (entity.invincibilityTimeRemaining <= 0) {
                entity.activateInvincibility = false;
                entity.element.style.opacity = "1";
            }
        }
    }
}
