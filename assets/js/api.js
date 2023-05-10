
async function getProduct(){
    const url = "https://raw.githubusercontent.com/Viipaxx/Desportivo-Paz/main/data/products.json"
    const fetching = await fetch(url)
    const products = await fetching.json()
    return await products.produtos
}
