function calcularCesta() {
  const supermercados = ["Carrefour", "Guanabara", "Mundial", "Prezunic"];
  const produtos = ["Arroz", "Feijão", "Leite", "Óleo", "Ovo"];
  const precos = [];


  for (let i = 0; i < supermercados.length; i++) {
    precos[i] = [];
    for (let j = 0; j < produtos.length; j++) {
      const idCampo = `preco-${i}-${j}`;
      const valor = parseFloat(document.getElementById(idCampo).value);

      if (isNaN(valor) || valor < 0) {
        alert(`Digite um preço válido para ${supermercados[i]} - ${produtos[j]}`);
        return;
      }

      precos[i][j] = valor;
    }
  }

  const totais = precos.map(linha => linha.reduce((soma, preco) => soma + preco, 0));

  let menorTotal = totais[0];
  let indiceMaisBarato = 0;
  for (let i = 1; i < totais.length; i++) {
    if (totais[i] < menorTotal) {
      menorTotal = totais[i];
      indiceMaisBarato = i;
    }
  }

  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerHTML = `
    <p>Totais por supermercado:</p>
    <ul>
      ${totais.map((total, i) => `<li>${supermercados[i]}: R$ ${total.toFixed(2)}</li>`).join("")}
    </ul>
    <p><strong>Supermercado com a cesta mais barata:</strong> ${supermercados[indiceMaisBarato]} (R$ ${menorTotal.toFixed(2)})</p>
  `;
}
