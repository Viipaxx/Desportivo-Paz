
const pegaImagem = () => {
  const cores = document.querySelectorAll('.colors img')

  cores.forEach((e, s) => {
    e.addEventListener("click", (element) => {
      trocaImagemPrincipal(element.target.src, s)

    })
  })
}

const trocaImagemPrincipal = (path, id) => {

  const imagemPrincipal = document.querySelector('#img-prod')
  imagemPrincipal.src = path


}

const getNumberURL = () => {
  var query = location.search.slice(1);
  var id = query.split("=");
  return id[1];
};

const getIdItem = (produto) => {
  produto.filter((e) => {
    if (e.id == getNumberURL()) {
      updateProduct(e);
    }
  });
};

const getColors = (produto) => {

  if (produto.tipos.length > 0) {
    const maisFotos = produto.tipos.map((tipo) => {
      return `
            <li class="colors">
            <img src="${tipo}">
            </li>
            `
    }).join('')
    return maisFotos
  } else {
    return ""
  }
}

const updateProduct = (produto) => {
  const content = document.querySelector(".content");
  document.title = produto.produto
  content.innerHTML = `
            <div class="content-img">
                <img id="img-prod" src="${produto.fotoItem}" alt="" />
            </div>
            <section>
                <ul class="otherColours">
                   ${getColors(produto)}
                </ul>
            </section>
            <div class="content-info">
                <h3 id="product">${produto.produto}</h3>
                <p class="description" id="description">${produto.descricao}</p>
                <p class="price">Price: <span id="price">${produto.price}</span></p>
            </div>
                <a id="red" href="">
                    <button id="buy" type="button">Buy Now</button>
                </a>
            </div>
           `;
};

  (async () => {
    const produtos = await getProduct();
    setTimeout(() => {
      getIdItem(produtos);
      getBuyNow()
      pegaImagem()
      adicionarCarrinho()
    }, 1000);
  })();
