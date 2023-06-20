const cart = []
let valorTotalCarrinho = 0

getCart = () => {
  return cart
}

getValorTotalCarrinho = () => {
  return valorTotalCarrinho
}

filtro = async (id) => {
  const produtos = await getProduct();

  const item = produtos.filter(produto => produto.id == id)

  return item[0]

}

updateProducts = (produto) => {
  const products = document.querySelector(".products ul");
  products.innerHTML = produto
    .map((element) => {
      return `<li class="product">
      <div class="product-img">
      <img src="${element.foto}" alt="${element.produto}">
      </div>
      <div class="product-info">
      <a href="assets/html/itemPage.html?name=${element.id}">
        <h3 id="${element.id}" class="produto">${element.produto}</h3>
        </a>
        <p>${element.descricao}</p>
        <span>$${element.price}</span>
        <i class="fa-solid fa-cart-shopping itemCarrinho"></i>
        </div>
        </li>`;
    })
    .join("");
};

getMenuBar = (produto) => {
  const menu = document.querySelectorAll(".menu-bar");

  menu.forEach((e) => {
    e.addEventListener("click", (element) => {
      const cat = element.target.textContent;

      const res = document.querySelector(".products ul");
      let itens = "";
      produto.map((product) => {
        product.categorias.filter((categoria) => {
          if (categoria.toLowerCase() === cat.toLowerCase()) {
            itens +=
              `
                <li class="product">
                <div class="product-img">
                <img src="${product.foto}" alt="${product.produto}">
                </div>
                <div class="product-info">
                <a href="assets/html/itemPage.html?name=${product.id}">
                      <h3 id="${product.id}" class="produto">${product.produto}</h3>
                      </a>
                      <p>${product.descricao}</p>
                      <span>$${product.price}</span>
                      <i class="fa-solid fa-cart-shopping itemCarrinho"></i>
                    </div>
                </li>
                `;

          }
        });
      });
      res.innerHTML = itens;
      adicionarCarrinho()
    });
  });
};

adicionarCarrinho = () => {
  const carrinho = document.querySelectorAll('.itemCarrinho')

  carrinho.forEach((item, index) => {
    item.addEventListener('click', async () => {

      itemAdicionadoAoCarrinho = await filtro(index + 1)
      validarItem(itemAdicionadoAoCarrinho)
    })
  })
}

validarItem = async (itemParaAdicionar) => {

  let temNoCarriho = false
  if (cart.length == 0) {

    itemParaAdicionar.qtd = 1
    cart.push(itemParaAdicionar)

  } else {

    cart.map((item) => {
      if (item.id == itemParaAdicionar.id) {
        item.qtd += 1
        temNoCarriho = true
      }
    })

    if (!temNoCarriho) {
      itemParaAdicionar.qtd = 1
      cart.push(itemParaAdicionar)
    }

  }

  setValorCarrinho()

}

setValorCarrinho = () => {
  const valorCarrinho = cart.map(e => e.price * e.qtd).reduce((curr, arr) => {
    return curr + arr
  }, 0)
  valorTotalCarrinho += valorCarrinho
}

(async () => {
  const produtos = await getProduct();
  setTimeout(() => {
    updateProducts(produtos);
    getMenuBar(produtos);
    adicionarCarrinho()
  }, 1000);
})();
