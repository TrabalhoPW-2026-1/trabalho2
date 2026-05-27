document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector("button");
    const raioInput = document.querySelector("#raio");
    const area = document.querySelector("#area");
    const perimetro = document.querySelector("#perimetro");
    if (!button || !raioInput || !area || !perimetro) {
        // alert("Elementos necessários não encontrados no DOM.");
        return;
    }
    button.addEventListener("click", () => {
        // alert("Botão clicado. Calculando área e perímetro...");
        if (!raioInput.value) {
            // alert("Campo de raio está vazio. Por favor, insira um valor.");
            return;
        }
        const r = parseFloat(raioInput.value);
        if (isNaN(r) || r < 0) {
            // alert("Valor de raio inválido. Por favor, insira um número positivo.");
            return;
        }
        const a = Math.PI * r * r;
        const p = 2 * Math.PI * r;
        area.value = a.toFixed(2);
        perimetro.value = p.toFixed(2);
        // alert(`Raio: ${r}, Área: ${a.toFixed(2)}, Perímetro: ${p.toFixed(2)}`);
    });
});
export {};
