getBuyNow = () => {
    const buy = document.getElementById('buy')

    buy.addEventListener('click', () => {
        const red = document.getElementById('red')
        alert('Você está sendo redirecionado!')
        red.href = 'https://wa.me/+5581997806196?text=Olá, gostaria de fazer um pedido!'
    })
}