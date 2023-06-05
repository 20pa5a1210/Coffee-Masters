import { getProductById } from "./Menu.js";


export async function addToCard(id) {
    const product = await getProductById(id)
    const result = app.store.cart.filter(prodInCart => prodInCart.product.id == id);
    if (result.length === 1) {
        app.store.cart = app.store.cart.map(p =>
            p.product.id == id ? { ...product, quantity: p.quantity + 1 } : p);
    } else {
        app.store.cart = [...app.store.cart, { product, quantity: 1 }]
    }
}

export async function removeFromCart(id){
    app.store.cart = app.store.cart.filter(p => p.product.id != id)
}
