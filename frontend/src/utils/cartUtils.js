export const addDecimals = (num) =>{
    return (Math.round(num*100)/100).toFixed(2);
}

export const updateCart = (state) => {
    //calculate items price (itemsPrice is not working)
    const itemsPrice = addDecimals(state.cartItems.reduce((acc, item)=> acc + item.qty * item.price, 0));
            
    //calculate shipping price (if amt > 100 = free, else 10)
    state.shippingPrice =  addDecimals(state.itemsPrice >100 ? 0 :10);

    //calculate tax price (15%)
    state.taxPrice = addDecimals(Number((0.15*itemsPrice).toFixed(2)));

    //calculate total price
    state.totalPrice = (
        Number(state.itemsPrice) +
        Number(state.shippingPrice) +
        Number(state.taxPrice)
    ).toFixed(2);

    localStorage.setItem('cart',JSON.stringify(state));

    return state;
}