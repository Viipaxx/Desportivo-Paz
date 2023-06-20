const areaCarrinho = document.querySelector('.cart-container')
const mostrarCarrinho = document.querySelector('.carrinho')

abrirCarrinho = () => {
    fecharCarrinho()
    
    mostrarCarrinho.addEventListener('click', () => {
        areaCarrinho.classList.toggle('hide')
        mostrarCarrinho.classList.toggle('hide')

        showCarrinho()
    })
}

showCarrinho = async () => {
    const carrinho = await pegarCarrinho()
    const valorCarrinho = await pegarValorTotalCarrinho()

}

fecharCarrinho = () => {
    const voltar = document.querySelector('.fecharCarrinho')
    
    voltar.addEventListener('click', () => {
        areaCarrinho.classList.toggle('hide')
        mostrarCarrinho.classList.toggle('hide')
    })
}

pegarCarrinho = async () => {
    const carrinho = await getCart()
    return carrinho
}

pegarValorTotalCarrinho = () => {
    const valorTotalCarrinho = getValorTotalCarrinho()
    return valorTotalCarrinho
}

(async () => {
    const produtos = await getProduct();
    setTimeout(() => {
        abrirCarrinho()
    }, 1000);
})();