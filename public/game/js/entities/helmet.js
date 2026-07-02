import { TAMX } from "../config.js";
import { road } from "../road.js";
export class Helmet {
    constructor() {
        this.type = "helmet";
        this.element = document.createElement("img");
        this.element.src = "/game/assets/svg/helmet.svg";
        this.element.style.position = "absolute";
        this.element.draggable = false;
        const margin = TAMX * 0.1;
        const x = margin + Math.random() * (TAMX * 0.8 - 40);
        this.position = { x, y: -50 };
        this.velocity = { x: 0, y: 1 };
        this.size = { width: 40, height: 40 };
        this.hitbox = { width: 32, height: 32 };
        this.element.style.width = `${this.size.width}px`;
        this.element.style.height = `${this.size.height}px`;
        this.element.style.left = `${this.position.x}px`;
        this.element.style.top = `${this.position.y}px`;
        road.element.appendChild(this.element);
    }
}
