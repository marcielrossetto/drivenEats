function perguntarIdade(){
    alert('bOM DIA  ');
    prompt('qua seu ano de nascimento');
}
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


/*uuuuuuu
  document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('click', function() {
      this.classList.toggle('selected');
      checkAllSelected();
    });
  });
  
  function checkAllSelected() {
    const sections = document.querySelectorAll('.section');
    let allSelected = true;
  
    sections.forEach(section => {
      const items = section.querySelectorAll('.item');
      const selectedItems = section.querySelectorAll('.item.selected');
      if (items.length !== selectedItems.length) {
        allSelected = false;
      }
    });
  
    const acaoBotao = document.getElementById('acaoBotao');
    if (allSelected) {
        acaoBotao.classList.add('ativar');
        acaoBotao.textContent = 'Todos os itens selecionados!';
    } else {
        acaoBotao.classList.remove('ativar');
        acaoBotao.textContent = 'Clique aqui';
    }
  }*/
/*uuuuuuu*/
document.querySelectorAll('.tambPrato, .tambBebida, .tambSobremesa').forEach(secao => {
    secao.addEventListener('click', function() {
        this.classList.toggle('selecionado');
        checkAllSelected();
    });
});

function checkAllSelected() {
    const secoes = document.querySelectorAll('.tambPrato, .tambBebida, .tambSobremesa');
    let allSelected = true;

    secoes.forEach(secao => {
        const itens = secao.querySelectorAll('.tambPrato, .tambBebida, .tambSobremesa');
        const selecionarItens = secao.querySelectorAll('.item.selected');
        if (itens.length !== selecionarItens.length) {
            allSelected = false;
        }
    });
    

    
}

document.querySelectorAll('.secao').forEach(secao => {
    secao.addEventListener('click', function() {
        this.classList.toggle('selecionado');
        checkAllSelected();
    });
});

document.querySelectorAll('.item').forEach(item => {
  item.addEventListener('click', function() {
    this.classList.toggle('selected');
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
      abrirConfirmacao();
      //prompt(`Você selecionou:\n- ${nomePrato}\n- ${nomeBebida}\n- ${nomeSobremesa}\n\nTotal: R$ ${total.toFixed(2)}`);
      //alert('cuidado')
  }
});


//botao cancelar pedido

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('cancelarBotao').addEventListener('click', function() {
      window.history.back();
  });
});

class Produto {
  constructor(elemento) {
      this.nome = elemento.querySelector(".nome").innerText;
      this.descricao = elemento.querySelector(".descricao").innerText;
      this.preco = parseFloat(elemento.querySelector(".preco").innerText);
  }
}

class Carrinho {
  constructor() {
      this.produtos = [];
      this.total = 0;
  }

  adicionarProduto(produto) {
      this.produtos.push(produto);
      this.total += produto.preco;
  }

  mostrarProdutos() {
      const detalhesPedido = document.getElementById("detalhesPedido");
      detalhesPedido.innerHTML = "";
      this.produtos.forEach(produto => {
          const p = document.createElement("p");
          p.innerText = `${produto.nome}: R$ ${produto.preco.toFixed(2)}`;
          detalhesPedido.appendChild(p);
      });
  }

  atualizarTotal() {
      document.getElementById("totalPedido").innerText = `R$ ${this.total.toFixed(2)}`;
  }
}

function somaValores() {
  const elementosProdutos = document.querySelectorAll(".produto");
  const carrinho = new Carrinho();

  elementosProdutos.forEach(elemento => {
      const produto = new Produto(elemento);
      carrinho.adicionarProduto(produto);
  });

  carrinho.mostrarProdutos();
  carrinho.atualizarTotal();
}

// Chama a função para somar os valores
somaValores();
