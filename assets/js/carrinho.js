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
    const listaProdutos = document.querySelector('.produtos-carrinho')
    const carrinho = await pegarCarrinho()
    const valorCarrinho = await pegarValorTotalCarrinho()

    
    setTimeout(() => {
        listaProdutos.innerHTML = carrinho.map((e) => {
            return `
                <li class="item-produto">
                    <div class="item-img">
                        <img src="${e.foto}" alt="${e.produto}">
                    </div>
                    <div class="item-info">
                        <h4>${e.produto}</h4>
                        <p>${e.descricao}</p>
                    <div class="item-info2">
                        <span class="valor-item-unidade">${e.price}$</span>
                        <div class="qtd">
                            <button class="diminuir-quantidade">-</button>
                            <span class="quantidade-produto">${e.qtd}</span>
                            <button class="aumentar-quantidade">+</button>
                        </div>
                    </div>
                    <i class="fa-solid fa-trash removerItem"></i>
                </div>
            `           
        }).join('')
        alterarQuantidade()
    }, 500)


}

alterarQuantidade = async () => {
    
    const minLimite = 0
    const quantidade = document.querySelectorAll('.quantidade-produto')
    const aumentarQuantidade = document.querySelectorAll('.aumentar-quantidade')
    const diminuirQuantidade = document.querySelectorAll('.diminuir-quantidade')
    const removerProduto = document.querySelectorAll('.removerItem')

    const carrinho = await pegarCarrinho()

    aumentarQuantidade.forEach((prod, index) => {
        prod.addEventListener('click', () => {
            carrinho[index].qtd += 1
            quantidade[index].innerHTML = carrinho[index].qtd
        })
    })

    diminuirQuantidade.forEach((prod, index) => {
        prod.addEventListener('click', () => {

            carrinho[index].qtd -= 1

            if (carrinho[index].qtd == minLimite){

                carrinho.splice(index, 1)
                showCarrinho()
                
            }else {
                quantidade[index].innerHTML = carrinho[index].qtd
            }

        })
    })

    removerProduto.forEach((prod, index) => {
        prod.addEventListener('click', () => {
            carrinho.splice(index, 1)
            showCarrinho()
        })
    })

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