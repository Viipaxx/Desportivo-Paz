getBuyNow = () => {
    const buy = document.getElementById('buy')

    buy.addEventListener('click', () => {
        const red = document.getElementById('red')
        alert('Você está sendo redirecionado!')
        red.href = 'https://wa.me/+5581997806196?text=Olá, gostaria de fazer um pedido!'
    })
}

getNumberURL = () => {
  var query = location.search.slice(1);
  var id = query.split("=");
  return id[1];
};

getIdItem = (produto) => {
  produto.filter((e) => {
    if (e.id == getNumberURL()) {
      updateProduct(e);
    }
  });
};

getColors = (produto) => {
    const cores =  produto.cores.map((cor) => {
        return `
            <li class="colors">
                <img src="${cor}">
            </li>
               `
        }).join('')
    return cores
}

updateProduct = (produto) => {
  const content = document.querySelector(".content");
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
  }, 1000);
})();
