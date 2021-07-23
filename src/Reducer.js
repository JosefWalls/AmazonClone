export const initalState = {
    basket: [
    {
            id:"B00CYS9DQ8",
            title:"Folgers Caramel Drizzle Flavored Coffee, 72 Keurig K-Cup Pods",
            price:38.82,
            rating:3,
            image:"https://images-na.ssl-images-amazon.com/images/I/81UzwvtZfAL._SL1500_.jpg"
    }, 
    {
        id:"B07K1CLKK7",
        title:"AUTOart Diecast Car & LED Display Case Package - 2015 Lamborghini Huracan Super Trofeo, Orange 81558 - 1/18 Scale Diecast Model Toy Car w/LED Display Case",
        price:188.99,
        rating:5,
        image:"https://images-na.ssl-images-amazon.com/images/I/617-zDDbePL._AC_SL1000_.jpg"
    }, ],
    user: null
};

export const getBasketTotal = (basket) =>  basket?.reduce((amount, item) => item.price + amount, 0);



function reducer(state, action){
    console.log(action)
    switch(action.type) {
        case 'ADD_TO_BASKET':
            return { ...state , basket: [...state.basket, action.item]};
        case 'REMOVE_FROM_BASKET':
            let newBasket = [...state.basket];
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
            // action.id comes from the remove from basket function

            if(index >= 0){
                //item exists in basket, remove it
                newBasket.splice(index, 1);
            } else {
                console.warn(`Cant remove product with product id ${action.id}`)
            }

            return { ...state , basket: newBasket};
        default:
            return state;
    }
}

export default reducer;