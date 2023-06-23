let idItem = -1

pegaImagem = () => {
  const imagens = document.querySelectorAll('.outras_imagens img')

  imagens.forEach((e, s) => {
    e.addEventListener("click", (element) => {
      trocaImagemPrincipal(element.target.src, s)
    })
  })
}

const trocaImagemPrincipal = (path, id) => {

  const imagemPrincipal = document.querySelector('#img-prod')

  imagemPrincipal.src = path


}

getColors = async (id) => {

  const produto = await filtro(id)

  const maisFotos = produto.tipos.map((tipo) => {
    return `
            <li class="outras_imagens">
              <img src="${tipo}">
            </li>
            `
  }).join('')

  return maisFotos

}

updateProduct = async (id) => {

  const produto = await filtro(id)

  const areaItem = document.querySelector('.secao-item')

  const maisFotos = await getColors(id)

  areaItem.innerHTML = `
      <div class="item-img">
      <img src="${produto.foto}" alt="${produto.produto}" id="img-prod">
      </div>
      
      <div class="item-imagens">
      <ul class="imagens">
        ${maisFotos}
      </ul>
      </div>
      
      <div class="item-info">
        <h3 id="product">${produto.produto}</h3>
        <p class="description" id="description">${produto.descricao}</p>
        <p class="price">Price: <span id="price">${produto.price}</span></p>
        </div>      
      `

  idItem = id
  console.log(idItem)
  pegaImagem()

}

adicionarAoCarrinho =  () => {
  const add = document.querySelectorAll('.addToCart')
  add.forEach(e => {

    e.addEventListener('click', async () => {
      
      const popupArea = document.querySelector('.item-container .pop-up')
    
      popupArea.classList.toggle('hide')
      setTimeout(() => {
        popupArea.classList.toggle('hide')
      }, 1499)
      
      const id = await filtro(idItem)
      
      validarItem(id)
      
    })
  })

}

voltarIndex = () => {
  const indexProdutos = document.querySelector('.products')
  const topHeader = document.querySelector('.top-header')
  const areaItem = document.querySelector('.item-container')
  const voltar = document.querySelector('.icon-back')

  voltar.addEventListener('click', () => {

    indexProdutos.classList.toggle('hide')
    topHeader.classList.toggle('hide')
    areaItem.classList.toggle('hide')
  })
}

(() => {
  setTimeout(() => {
    adicionarAoCarrinho()
    voltarIndex()
  }, 1000);
})();