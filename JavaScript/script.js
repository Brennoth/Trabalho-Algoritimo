function calcularCesta() {
  // Lista de supermercados a serem comparados
  const supermercados = ["Carrefour", "Guanabara", "Mundial", "Prezunic"];

  // Lista dos produtos da cesta
  const produtos = ["Arroz", "Feijão", "Leite", "Óleo", "Ovo"];

  // Matriz que vai armazenar os preços dos produtos em cada supermercado
  const precos = [];

  // Laço para percorrer cada supermercado
  for (let i = 0; i < supermercados.length; i++) {
    precos[i] = []; // Cria uma linha na matriz de preços para o supermercado atual

    // Laço para percorrer os produtos
    for (let j = 0; j < produtos.length; j++) {
      // Monta o ID do campo de input no HTML, baseado na posição i (mercado) e j (produto)
      const idCampo = `preco-${i}-${j}`;

      // Pega o valor digitado no input e converte para número
      const valor = parseFloat(document.getElementById(idCampo).value);

      // Validação: se o valor não for um número ou for negativo, mostra erro e para a função
      if (isNaN(valor) || valor < 0) {
        alert(`Digite um preço válido para ${supermercados[i]} - ${produtos[j]}`);
        return;
      }

      // Armazena o preço na matriz
      precos[i][j] = valor;
    }
  }

  // Calcula o total de cada supermercado somando os preços da linha correspondente na matriz
  const totais = precos.map(linha => linha.reduce((soma, preco) => soma + preco, 0));

  // Encontra o índice do supermercado com o menor total
  let menorTotal = totais[0];
  let indiceMaisBarato = 0;
  for (let i = 1; i < totais.length; i++) {
    if (totais[i] < menorTotal) {
      menorTotal = totais[i];
      indiceMaisBarato = i;
    }
  }

  // Exibe o resultado na tela: total por supermercado e o mais barato
  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerHTML = `
    <p>Totais por supermercado:</p>
    <ul>
      ${totais.map((total, i) => `<li>${supermercados[i]}: R$ ${total.toFixed(2)}</li>`).join("")}
    </ul>
    <p><strong>Supermercado com a cesta mais barata:</strong> ${supermercados[indiceMaisBarato]} (R$ ${menorTotal.toFixed(2)})</p>
  `;
}
