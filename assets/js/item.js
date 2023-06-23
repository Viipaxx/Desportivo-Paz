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

  console.log(produto)


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

  const areaItem = document.querySelector('.item-container main')

  const maisFotos = await getColors(id)

  areaItem.innerHTML = `
      <div class="item-img">
      <img src="${produto.foto}" alt="${produto.produto}">
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

      <button class="button">Add To Cart</button>
      
      `

      pegaImagem()
}

