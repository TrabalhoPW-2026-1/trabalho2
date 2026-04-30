(function () {
  const display = document.getElementById("display");
  const botoesValor = document.querySelectorAll("[data-value]");
  const botaoLimpar = document.getElementById("limpar");
  const botaoIgual = document.getElementById("igual");

  let expressao = "";

  botoesValor.forEach(function (botao) {
    botao.addEventListener("click", function () {
      const valor = botao.dataset.value;

      expressao += valor;
      display.value = expressao;
    });
  });

  botaoLimpar.addEventListener("click", function () {
    expressao = "";
    display.value = "0";
  });

  botaoLimpar.addEventListener("click", function () {
    console.log("Botão Limpar clicado");
  });

  botaoIgual.addEventListener("click", function () {
    try {
      const resultado = eval(expressao);

      display.value = resultado;
      expressao = String(resultado);
    } catch (erro) {
      display.value = "Erro";
      expressao = "";
    }
  });
})();
