import { Player } from "../entities/player.js";
export class InputSystem {
    update(world) {
        const moto = world.entities.find(e => e instanceof Player);
        if (!moto)
            return;
        const left = world.keyboard["ArrowLeft"];
        const right = world.keyboard["ArrowRight"];
        const up = world.keyboard["ArrowUp"];
        const down = world.keyboard["ArrowDown"];
        const speed = world.turboTimeRemaining > 0 ? 6 : 4;
        if ((left && right) || (!left && !right)) {
            moto.velocity.x = 0;
            moto.setDirection(1);
        }
        else {
            moto.velocity.x = left ? -speed : speed;
            moto.setDirection(left ? 0 : 2);
        }
        moto.velocity.y = up ? -speed : down ? speed : 0;
    }
}
