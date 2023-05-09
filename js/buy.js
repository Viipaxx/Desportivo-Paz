const buy = document.getElementById('buy')

buy.addEventListener('click', () => {
    alert('Você está sendo redirecionado para o chat com o vendedor!')
    const red = document.getElementById('red')
    red.href = 'https://wa.me/+5581997806196?text=Olá,%20gostaria%20de%20comprar%20uma%20bmeia%20antiderrapante'
})

