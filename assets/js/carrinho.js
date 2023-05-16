const carrinho = document.querySelector('.carrinho i')
const qtd = document.querySelector('#qtd-carrinho')
const btn = document.querySelectorAll('.btn-qtd-carrinho')


carrinho.addEventListener('click', () => {
    const carrinhoCompra = document.querySelector('.carrinho-compra')
    carrinhoCompra.classList.toggle('hide')
    carrinho.classList.toggle('fa-cart-shopping')
    carrinho.classList.toggle('fa-x')
})


btn.forEach((e) => {
    e.addEventListener('click', (element) => {
        if (element.target.textContent === '-'){
            rem1Item()
        }else if (element.target.textContent === '+') {
            add1Item()
        }
        else{

        }
    })
})

add1Item = () => {
    qtd.innerHTML = parseInt(qtd.textContent) + 1
}

rem1Item = () => {
   if (parseInt(qtd.textContent) === 0){
   }else{
    qtd.innerHTML = parseInt(qtd.textContent) - 1
    } 
}

remItem =() => {
    qtd.innerHTML = 0
}

setProdutosCarrinho = (produto) =>{
    
}

(async () => {
    const produtos = await getProduct();
    setTimeout(() => {
        
    }, 1000);
  })();
