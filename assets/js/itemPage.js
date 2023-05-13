pegarId = () => {
    var query = location.search.slice(1)
    var id = query.split('=')
    return id[1]
}

getItem = (produto) => {
    produto.filter((e) => {
        if (e.id == pegarId()){
            updateProduct(e)
            console.log(pegarId())
        }
    })
}

updateProduct = (produto) => {
  const content = document.querySelector(".content");
  content.innerHTML = `
            <div class="content-img">
                <img id="img-prod" src="${produto.fotoItem}" alt="" />
            </div>
            <div class="content-info">
                <h3 id="product">${produto.produto}</h3>
                <p class="description" id="description">${produto.descricao}</p>
                <p class="price">Price: <span id="price">${produto.price}</span></p>
            </div>
                <a id="red" href="">
                    <button id="buy" type="button">Buy Now</button>
                </a>
            </div>
           `
};

(async () => {
  const produtos = await getProduct();
  setTimeout(() => {
    getItem(produtos);
  }, 1000);
})();
