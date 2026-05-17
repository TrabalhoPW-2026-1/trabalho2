document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("button") as HTMLButtonElement;
  const raio = document.getElementById("raio") as HTMLInputElement;
  const area = document.getElementById("area") as HTMLInputElement;
  const perimetro = document.getElementById("perimetro") as HTMLInputElement;

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
  })
});
