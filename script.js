let carrinho = [];

function adicionarAoCarrinho(produto, preco) {
    carrinho.push({ produto, preco });
    alert(`${produto} foi adicionada ao carrinho!`);
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const listaCarrinho = document.getElementById("itens-carrinho");
    const totalCarrinho = document.getElementById("total-carrinho");

    // Limpa a lista antes de renderizar
    listaCarrinho.innerHTML = "";

    // Adiciona os itens ao carrinho
    let total = 0;
    carrinho.forEach((item, index) => {
        total += item.preco;
        const li = document.createElement("li");
        li.textContent = `${item.produto} - R$ ${item.preco.toFixed(2)}`;
        const removerBtn = document.createElement("button");
        removerBtn.textContent = "Remover";
        removerBtn.onclick = () => removerDoCarrinho(index);
        li.appendChild(removerBtn);
        listaCarrinho.appendChild(li);
    });

    // Atualiza o total
    totalCarrinho.textContent = `Total: R$ ${total.toFixed(2)}`;
}

function removerDoCarrinho(index) {
    carrinho.splice(index, 1);
    atualizarCarrinho();
}

function finalizarCompra() {
    if (carrinho.length === 0) {
        alert("Seu carrinho está vazio!");
        return;
    }
    alert("Compra finalizada! Obrigado pela preferência.");
    carrinho = [];
    atualizarCarrinho();
    fecharCarrinho();
}

const modal = document.getElementById("carrinho-modal");
const abrirCarrinhoBtn = document.getElementById("abrir-carrinho");
const fecharCarrinhoBtn = document.getElementById("fechar-carrinho");

abrirCarrinhoBtn.onclick = () => {
    modal.style.display = "flex";
};

fecharCarrinhoBtn.onclick = () => {
    fecharCarrinho();
};

function fecharCarrinho() {
    modal.style.display = "none";
}
