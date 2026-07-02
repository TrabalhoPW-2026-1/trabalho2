export class World {
    constructor() {
        this.entities = [];
        this.score = 0;
        this.lives = 3;
        this.hasPizza = false;
        this.tipTimer = 0;
        this.turboTimeRemaining = 0;
        this.keyboard = {};
        this.onGameOver = () => { };
    }
    gameOver() {
        this.onGameOver();
    }
    destroyEntity(entity) {
        entity.element.remove();
        if ("visualAttachments" in entity) {
            for (const a of entity.visualAttachments) {
                a.element.remove();
            }
        }
        this.entities = this.entities.filter(e => e !== entity);
    }
}
