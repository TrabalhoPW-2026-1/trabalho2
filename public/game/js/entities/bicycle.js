import { TAMX, TAMY } from "../config.js";
import { road } from "../road.js";
export class Bicycle {
    constructor() {
        this.type = "bicycle";
        this.element = document.createElement("img");
        this.element.src = "/game/assets/svg/bicycle.svg";
        this.element.style.position = "absolute";
        this.element.draggable = false;
        const fromLeft = Math.random() < 0.5;
        const startX = fromLeft ? -50 : TAMX + 10;
        const startY = Math.random() * (TAMY * 0.5);
        const xSpeed = 2 + Math.random() * 1.5;
        const ySpeed = 2 + Math.random() * 1.5;
        this.position = { x: startX, y: startY };
        this.velocity = { x: fromLeft ? xSpeed : -xSpeed, y: ySpeed };
        this.size = { width: 44, height: 70 };
        this.hitbox = { width: 56, height: 34 };
        this.element.style.width = `${this.size.width}px`;
        this.element.style.height = `${this.size.height}px`;
        this.element.style.left = `${this.position.x}px`;
        this.element.style.top = `${this.position.y}px`;
        this.element.style.transform = fromLeft ? "rotate(90deg)" : "rotate(-90deg)";
        road.element.appendChild(this.element);
    }
}
