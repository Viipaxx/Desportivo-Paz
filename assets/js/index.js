const cart = []

getCart = () => {
  return cart
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
        <h3 id="${element.id}" class="produto">${element.produto}</h3>
        <p>${element.descricao}</p>
        <span>$${element.price}</span>
        <i class="fa-solid fa-cart-shopping itemCarrinho" id="${element.id}"></i>
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
                      <h3 id="${product.id}" class="produto">${product.produto}</h3>
                      <p>${product.descricao}</p>
                      <span>$${product.price}</span>
                      <i class="fa-solid fa-cart-shopping itemCarrinho" id="${product.id}"></i>
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

  carrinho.forEach((item) => {

    item.addEventListener('click', async (e) => {

      itemAdicionadoAoCarrinho = await filtro(e.target.id)

      validarItem(itemAdicionadoAoCarrinho)
    })
  })
}

validarItem = async (itemParaAdicionar) => {

  const popupArea = document.querySelector('.pop-up')
  let temNoCarriho = false

  popupArea.classList.toggle('hide')
  setTimeout(() => {
    popupArea.classList.toggle('hide')
  }, 1499)


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

}

adicionarProduto = (index, qtd) => {
  cart[index].qtd += qtd
}

abrirItem = () => {
  const indexProdutos = document.querySelector('.products')
  const topHeader = document.querySelector('.top-header')
  const produto = document.querySelectorAll('.produto')
  const areaItem = document.querySelector('.item-container')

  produto.forEach(e => {
    e.addEventListener('click', (element) => {
      
      indexProdutos.classList.toggle('hide')
      topHeader.classList.toggle('hide')
      areaItem.classList.toggle('hide')

      updateProduct(element.target.id)
    })
  })
}

(async () => {
  const produtos = await getProduct();
  setTimeout(() => {
    updateProducts(produtos);
    getMenuBar(produtos);
    adicionarCarrinho()
    abrirItem()
  }, 1000);
})();
