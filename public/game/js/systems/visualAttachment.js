import { Player } from "../entities/player.js";
export class VisualAttachmentSystem {
    update(world) {
        for (const entity of world.entities) {
            if (!("position" in entity) || !("visualAttachments" in entity))
                continue;
            if (entity instanceof Player) {
                const pizza = entity.visualAttachments.find(a => a.id === "pizza");
                if (pizza)
                    pizza.isVisible = world.hasPizza;
            }
            const ve = entity;
            for (const att of ve.visualAttachments) {
                att.element.style.left = `${entity.position.x + att.offset.x}px`;
                att.element.style.top = `${entity.position.y + att.offset.y}px`;
                att.element.style.display = att.isVisible ? "block" : "none";
            }
        }
    }
}
