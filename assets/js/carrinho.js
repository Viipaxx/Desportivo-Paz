const carrinho = document.querySelector('.carrinho i')

carrinho.addEventListener('click', () => {
    const carrinhoCompra = document.querySelector('.carrinho-compra')
    carrinhoCompra.classList.toggle('hide')
    carrinho.classList.toggle('fa-cart-shopping')
    carrinho.classList.toggle('fa-x')
})