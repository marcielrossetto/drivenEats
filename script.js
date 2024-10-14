// funções seleciona os itens e muda a cor da borda
document.querySelectorAll('.tambSobremesa').forEach(tambSobremesa => {
    tambSobremesa.addEventListener('click', function() {
      // Remove a classe 'selected' de todos os itens
      document.querySelectorAll('.tambSobremesa').forEach(i => i.classList.remove('selected'));
      // Adiciona a classe 'selected' ao item clicado
      this.classList.add('selected');
    });
  });
document.querySelectorAll('.tambBebida').forEach(tambBebida => {
    tambBebida.addEventListener('click', function() {
      // Remove a classe 'selected' de todos os itens
      document.querySelectorAll('.tambBebida').forEach(i => i.classList.remove('selected'));
      // Adiciona a classe 'selected' ao item clicado
      this.classList.add('selected');
    });
  });
document.querySelectorAll('.tambPrato').forEach(tambPrato => {
    tambPrato.addEventListener('click', function() {
      // Remove a classe 'selected' de todos os itens
      document.querySelectorAll('.tambPrato').forEach(i => i.classList.remove('selected'));
      // Adiciona a classe 'selected' ao item clicado
      this.classList.add('selected');
    });
  });



/*muda cor botão quando produtos selecionados*/
document.querySelectorAll('.tambPrato, .tambBebida, .tambSobremesa').forEach(secao => {
    secao.addEventListener('click', function() {
        this.classList.toggle('selecionado');
        checkAllSelected();
    });
});
/* funcao slecionar produtos*/
function checkAllSelected() {
  const pratoSelecionado = document.querySelector('.tambPrato.selected') !== null;
  const bebidaSelecionada = document.querySelector('.tambBebida.selected') !== null;
  const sobremesaSelecionada = document.querySelector('.tambSobremesa.selected') !== null;
  const acaoBotao = document.getElementById('acaoBotao');
  if (pratoSelecionado && bebidaSelecionada && sobremesaSelecionada) {
    acaoBotao.classList.add('ativar');
    acaoBotao.textContent = 'Fechar pedidos';
    acaoBotao.disabled = false;
  } else {
    acaoBotao.classList.remove('ativar');
    acaoBotao.innerHTML = 'Selecione os 3 itens para fechar o pedido';
    acaoBotao.disabled = true;
  }
}
/* funcao slecionar produtos*/
function checkAllSelected() {
  const pratoSelecionado = document.querySelector('.tambPrato.selected') !== null;
  const bebidaSelecionada = document.querySelector('.tambBebida.selected') !== null;
  const sobremesaSelecionada = document.querySelector('.tambSobremesa.selected') !== null;
  const acaoBotao = document.getElementById('acaoBotao');
  if (pratoSelecionado && bebidaSelecionada && sobremesaSelecionada) {
    acaoBotao.classList.add('ativar');
    acaoBotao.textContent = 'Fechar pedidos';
    acaoBotao.disabled = false;
  } else {
    acaoBotao.classList.remove('ativar');
    acaoBotao.innerHTML = 'Selecione os 3 itens para fechar o pedido';
    acaoBotao.disabled = true;
  }
}


//abrir confirmação
function abrirConfirmacao() {
  const painel = document.querySelector(".janelaConfirmacao");
  painel.classList.remove('escondido');
}

document.getElementById('acaoBotao').addEventListener('click', function() {
  const pratoSelecionado = document.querySelector('.tambPrato.selected');
  const bebidaSelecionada = document.querySelector('.tambBebida.selected');
  const sobremesaSelecionada = document.querySelector('.tambSobremesa.selected');

  if (pratoSelecionado && bebidaSelecionada && sobremesaSelecionada) {
      const nomePrato = pratoSelecionado.getAttribute('data-nome');
      const precoPrato = parseFloat(pratoSelecionado.getAttribute('data-preco'));
      const nomeBebida = bebidaSelecionada.getAttribute('data-nome');
      const precoBebida = parseFloat(bebidaSelecionada.getAttribute('data-preco'));
      const nomeSobremesa = sobremesaSelecionada.getAttribute('data-nome');
      const precoSobremesa = parseFloat(sobremesaSelecionada.getAttribute('data-preco'));

      const total = precoPrato + precoBebida + precoSobremesa;

      // Atualiza os detalhes do pedido
      document.getElementById('detalhesPedido').innerHTML = `
        <p> > Prato: ${nomePrato} - R$ ${precoPrato.toFixed(2)}</p>
        <p> > Bebida: ${nomeBebida} - R$ ${precoBebida.toFixed(2)}</p>
        <p> > Sobremesa: ${nomeSobremesa} - R$ ${precoSobremesa.toFixed(2)}</p>
      `;

      // Atualiza o total do pedido
      document.getElementById('totalPedido').textContent = `R$ ${total.toFixed(2)}`;

      abrirConfirmacao();
  } else {
      alert('Por favor, selecione um prato, uma bebida e uma sobremesa.');
  }
});

//botao cancelar volta na tela fazer pedido
function botaoCancelar() {
  const mudaClasse = document.querySelector('.janelaConfirmacao');
  mudaClasse.classList.toggle("escondido")
}
// enviar pedido whatsapp
function enviarPedidoWhatsApp() {
  const pratoSelecionado = document.querySelector('.tambPrato.selected');
  const bebidaSelecionada = document.querySelector('.tambBebida.selected');
  const sobremesaSelecionada = document.querySelector('.tambSobremesa.selected');

  if (pratoSelecionado && bebidaSelecionada && sobremesaSelecionada) {
      const nomePrato = pratoSelecionado.getAttribute('data-nome');
      const precoPrato = parseFloat(pratoSelecionado.getAttribute('data-preco'));
      const nomeBebida = bebidaSelecionada.getAttribute('data-nome');
      const precoBebida = parseFloat(bebidaSelecionada.getAttribute('data-preco'));
      const nomeSobremesa = sobremesaSelecionada.getAttribute('data-nome');
      const precoSobremesa = parseFloat(sobremesaSelecionada.getAttribute('data-preco'));

      const total = precoPrato + precoBebida + precoSobremesa;

      const mensagem = `Olá, gostaria de fazer um pedido:\n\n` +
                       `Prato: ${nomePrato} - R$ ${precoPrato.toFixed(2)}\n` +
                       `Bebida: ${nomeBebida} - R$ ${precoBebida.toFixed(2)}\n` +
                       `Sobremesa: ${nomeSobremesa} - R$ ${precoSobremesa.toFixed(2)}\n\n` +
                       `Total: R$ ${total.toFixed(2)}`;

      const numeroWhatsApp = '5521996169369'; 
      const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

      window.open(urlWhatsApp, '_blank');
  } else {
      alert('Por favor, selecione um prato, uma bebida e uma sobremesa.');
  }
}

