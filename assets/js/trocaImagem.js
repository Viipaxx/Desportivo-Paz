
pegaImagem = () => {
    const cores = document.querySelectorAll('.colors img')
    
    cores.forEach((e, s) => {
        e.addEventListener("click", (element) => {
            trocaImagemPrincipal(element.target.src, s)

        })
    })
}

trocaImagemPrincipal = (path, id) => {

    const imagemPrincipal = document.querySelector('#img-prod')
    const pathImagemPrincipal = imagemPrincipal.src
    imagemPrincipal.src = path

    trocaImagemPequena(pathImagemPrincipal, id)


}

trocaImagemPequena = (path, id) => {
    const cores = document.querySelectorAll('.colors img')
    cores.forEach((e, s) => {
        if (s === id){
            e.src = path
        }       
    })
}