document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("button");
    const raio = document.getElementById("raio");
    const area = document.getElementById("area");
    const perimetro = document.getElementById("perimetro");
    if (!button || !raio || !area || !perimetro) {
        console.error("Elementos necessários não encontrados no DOM.");
        return;
    }
    button.addEventListener("click", () => {
        const r = parseFloat(raio.value || "0");
        if (isNaN(r) || r < 0) {
            return;
        }
        const areaVal = Math.PI * r * r;
        const perimetroVal = 2 * Math.PI * r;
        area.value = areaVal.toFixed(2);
        perimetro.value = perimetroVal.toFixed(2);
    });
});
export {};
