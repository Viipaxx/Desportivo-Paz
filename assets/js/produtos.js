getProductClass = () => {
  const item = document.querySelectorAll(".produto");
  item.forEach((e) => {
    e.addEventListener("click", (element) => {
      console.log(element.target.id);
    });
  });
};

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
      let b = "";
      produto.map((product) => {
        product.categorias.filter((categoria) => {
            console.log(product.categorias)
          if (categoria.toLowerCase() === cat.toLowerCase()) {
            b += 
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
                        </div>
                    </li>
                `;
          }
        });
      });
      res.innerHTML = b;
    });
  });
};

(async () => {
  const produtos = await getProduct();
  setTimeout(() => {
    updateProducts(produtos);
    getMenuBar(produtos);
    getProductClass();
  }, 1000);
})();
