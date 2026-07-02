import { Player } from "../entities/player.js";
import { MAX_TIP_TIMER } from "../config.js";
export class ColisionSystem {
    update(world) {
        const collidables = world.entities.filter(e => "hitbox" in e);
        const player = collidables.find(e => e instanceof Player);
        if (!player)
            return;
        for (const other of collidables) {
            if (other === player)
                continue;
            if (!this.overlaps(player, other))
                continue;
            switch (other.type) {
                case "car":
                case "bicycle":
                    this.handleObstacleHit(player, other, world);
                    break;
                case "pizzabox":
                    if (!world.hasPizza) {
                        world.hasPizza = true;
                        world.tipTimer = MAX_TIP_TIMER;
                        world.destroyEntity(other);
                    }
                    break;
                case "customer":
                    if (world.hasPizza) {
                        this.handleDelivery(other, world);
                    }
                    break;
                case "turbo":
                    world.turboTimeRemaining = 300;
                    world.destroyEntity(other);
                    break;
                case "helmet":
                    world.lives += 1;
                    world.destroyEntity(other);
                    break;
            }
        }
    }
    overlaps(a, b) {
        return (a.position.x < b.position.x + b.hitbox.width &&
            a.position.x + a.hitbox.width > b.position.x &&
            a.position.y < b.position.y + b.hitbox.height &&
            a.position.y + a.hitbox.height > b.position.y);
    }
    handleObstacleHit(player, entity, world) {
        if (player.activateInvincibility)
            return;
        if (world.hasPizza) {
            world.hasPizza = false;
            world.tipTimer = 0;
        }
        world.lives -= 1;
        player.setInvencibility();
        world.destroyEntity(entity);
        if (world.lives <= 0)
            world.gameOver();
    }
    handleDelivery(customer, world) {
        const tip = Math.max(10, Math.round((world.tipTimer / MAX_TIP_TIMER) * 100));
        world.score += tip;
        world.hasPizza = false;
        world.tipTimer = 0;
        world.destroyEntity(customer);
    }
}
