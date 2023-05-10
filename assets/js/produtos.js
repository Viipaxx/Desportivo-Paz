const item = document.querySelectorAll(".produto");

item.forEach((e) => {
    e.addEventListener("click", (element) => {
        setProduct(element.target)
    });
});

updateProducts = (produto) => {
    const products = document.querySelector('.products ul')

    products.innerHTML = produto.map((element) => {
        return `<li class="product">
        <div class="product-img">
            <img src="assets/img/MAT - Q/todas as meias.jpg" alt="Meias Antiderrapante">
        </div>
        <div class="product-info">
            <a href="#">
                <h3 class="produto">${element.produto}</h3>
            </a>
            <p>${element.descricao}</p>
            <span>$${element.price}</span>
        </div>
      </li>`
    }).join('')

}

(async () => {
    const produtos = await getProduct()
    setTimeout(() => {
        updateProducts(produtos)
    }, 1000);
})()
