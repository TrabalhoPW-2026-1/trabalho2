document.addEventListener("DOMContentLoaded", () => {
    const inputs = document.querySelectorAll('input');
    const inputRaio = inputs[0];
    const inputArea = inputs[1];
    const inputCirc = inputs[2];

    inputRaio.addEventListener('input', () => {
        const raio = parseFloat(inputRaio.value);
        inputArea.value = Math.PI * Math.pow(raio, 2);
        inputCirc.value = 2 * Math.PI * raio;
    });
});