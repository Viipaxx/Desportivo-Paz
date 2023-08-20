const cupom = document.querySelector('#cupom')
const areaCupomMSG = document.querySelector('.desconto-cupom')

cupom.addEventListener("keyup", ({ key }) => {
    
    const msgCupom = document.querySelector('#cupom-msg')
    const codigoCupom = cupom.value
    const cupons = ['PACOCA_S21', 'VIIPAXX_', '20PORCENTO', '10PORCENTO']
    let mensagem = ''

    if (key === "Enter") {
        
        if (codigoCupom !== ''){

            const valorDesconto = cupons.filter((cupom) => cupom === codigoCupom)

            if (valorDesconto == 'VIIPAXX_'){
                
                mensagem = 'Você adquiriu um cupom que dá direito a 20% de desconto e frete grátis.'
                msgCupom.innerHTML = mensagem

                areaCupomMSG.classList.toggle('hide')
            
                setTimeout(() => {
                    areaCupomMSG.classList.toggle('hide')
                }, 1999);

            } else if (codigoCupom == 'PACOCA_S21') {

                mensagem = 'Você adquiriu um cupom que dá direito a frete grátis.'
                msgCupom.innerHTML = mensagem

                areaCupomMSG.classList.toggle('hide')
            
                setTimeout(() => {
                    areaCupomMSG.classList.toggle('hide')
                }, 1999);

            }else if (codigoCupom == '20PORCENTO') {
                
                mensagem = 'Você adquiriu um cupom que dá direito a 20% de desconto.'
                msgCupom.innerHTML = mensagem

                areaCupomMSG.classList.toggle('hide')
            
                setTimeout(() => {
                    areaCupomMSG.classList.toggle('hide')
                }, 1999);

            }else if (codigoCupom == '10PORCENTO') {
                
                mensagem = 'Você adquiriu um cupom que dá direito a 10% de desconto.'
                msgCupom.innerHTML = mensagem

                areaCupomMSG.classList.toggle('hide')
            
                setTimeout(() => {
                    areaCupomMSG.classList.toggle('hide')
                }, 1999);

            }

        }

    }
})