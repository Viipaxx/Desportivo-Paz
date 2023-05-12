pegaProduto = () => {
    const item = document.querySelectorAll(".produto");
    item.forEach((e) => {
        e.addEventListener("click", (element) => {
            console.log(element.target.id)
        });
    });
}

updateProducts = (produto) => {
    const products = document.querySelector('.products ul');
    products.innerHTML = produto.map((element) => {
        return `<li class="product">
        <div class="product-img">
        <img src="${element.foto}" alt="${element.produto}">
        </div>
        <div class="product-info">
        <a href="#">
        <h3 id="${element.id}" class="produto">${element.produto}</h3>
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
        pegaProduto()
    }, 1000);
})()
