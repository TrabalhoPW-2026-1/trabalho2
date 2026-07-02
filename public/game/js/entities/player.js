import { INVINCIBILITY_TIME, TAMX, TAMY } from "../config.js";
import { road } from "../road.js";
export class Player {
    constructor() {
        this.position = { x: TAMX / 2 - 30, y: TAMY - 130 };
        this.velocity = { x: 0, y: 0 };
        this.size = { width: 60, height: 90 };
        this.hitbox = { width: 48, height: 72 };
        this.type = "player";
        this.activateInvincibility = false;
        this.invincibilityTimeRemaining = INVINCIBILITY_TIME;
        this.visualAttachments = [];
        this.element = document.createElement("img");
        this.element.id = "moto";
        this.element.src = "/game/assets/svg/moto.svg";
        this.element.style.width = `${this.size.width}px`;
        this.element.style.height = `${this.size.height}px`;
        this.element.style.position = "absolute";
        this.element.draggable = false;
        this.syncElement();
        road.element.appendChild(this.element);
        const pizzaEl = document.createElement("img");
        pizzaEl.src = "/game/assets/svg/pizza.svg";
        pizzaEl.style.position = "absolute";
        pizzaEl.style.width = "28px";
        pizzaEl.style.height = "28px";
        pizzaEl.style.display = "none";
        pizzaEl.style.pointerEvents = "none";
        road.element.appendChild(pizzaEl);
        this.visualAttachments.push({
            id: "pizza",
            element: pizzaEl,
            offset: { x: 40, y: -10 },
            isVisible: false,
        });
    }
    syncElement() {
        this.element.style.left = `${this.position.x}px`;
        this.element.style.top = `${this.position.y}px`;
    }
    setDirection(dir) {
        this.element.style.transform = dir === 0 ? "scaleX(-1)" : "scaleX(1)";
    }
    setInvencibility() {
        this.activateInvincibility = true;
        this.invincibilityTimeRemaining = INVINCIBILITY_TIME;
    }
}
