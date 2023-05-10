
async function getProduct(){
    const url = "../../data/products.json"
    const fetching = await fetch(url)
    const products = await fetching.json()
    return await products.produtos
}
