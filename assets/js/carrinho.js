const areaCarrinho = document.querySelector('.cart-container')
const mostrarCarrinho = document.querySelector('.carrinho')
const indexProdutos = document.querySelector('.products')
const topHeader = document.querySelector('.top-header')

abrirCarrinho = () => {
    fecharCarrinho()
    payment()
    
    mostrarCarrinho.addEventListener('click', () => {
        
        
        areaCarrinho.classList.toggle('hide')
        topHeader.classList.toggle('hide')
        indexProdutos.classList.toggle('hide')

        showCarrinho()
    })
}

showCarrinho = async () => {
    const listaProdutos = document.querySelector('.produtos-carrinho')
    const carrinho = await pegarCarrinho()


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
        atualizarValorCarrinho()
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
            atualizarValorCarrinho()
        })
    })

    diminuirQuantidade.forEach((prod, index) => {
        prod.addEventListener('click', () => {

            carrinho[index].qtd -= 1
            atualizarValorCarrinho()

            if (carrinho[index].qtd == minLimite) {

                carrinho.splice(index, 1)
                showCarrinho()
                atualizarValorCarrinho()

            } else {
                quantidade[index].innerHTML = carrinho[index].qtd
                atualizarValorCarrinho()
            }

        })
    })

    removerProduto.forEach((prod, index) => {
        prod.addEventListener('click', () => {
            carrinho.splice(index, 1)
            showCarrinho()
            atualizarValorCarrinho()
        })
    })

}

fecharCarrinho = () => {
    const voltar = document.querySelector('.fecharCarrinho')

    voltar.addEventListener('click', () => {
        areaCarrinho.classList.toggle('hide')
        topHeader.classList.toggle('hide')
        indexProdutos.classList.toggle('hide')
    })
}

atualizarValorCarrinho = async () => {
    const areaValor = document.querySelector('#valorTotal')
    const valorCarrinho = await calcularValorCarrinho()


    areaValor.innerHTML = `${valorCarrinho.toFixed(2)}$`
}

calcularValorCarrinho = async () => {
    const carrinho = await pegarCarrinho()

    const valorCarrinho = carrinho.map(e => e.price * e.qtd).reduce((curr, arr) => {
        return curr + arr
    }, 0)

    return valorCarrinho
}

pegarCarrinho = async () => {
    const carrinho = await getCart()
    return carrinho
}

payment = async () => {

    const pay = document.querySelector('#button-pagamento')
    const carrinho = await pegarCarrinho()

    pay.addEventListener('click', () => {

        if (carrinho.length === 0) {
            alert('O carrinho está vazio.')
        } else {
            alert('Você está sendo direcionado para área de pagamento!')
        }

    })
}

(async () => {
    const produtos = await getProduct();
    setTimeout(() => {
        abrirCarrinho()
    }, 1000);
})();