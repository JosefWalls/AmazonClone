import React from 'react';
import "./Checkout.css";
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import SubTotal from './Subtotal';

function Checkout(){

    const [{basket}] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668.jpg" alt="" className="checkout_ad"/>
                {basket?.length === 0 ? 
                <div>
                    <h2>Your Shopping Basket is empty</h2>
                    <p>You have no items in your basket. To buy one or more items, click "Add To Basket" next to the item.</p>
                </div>
                : 
                <div>
                    <h2 className="checkout__title">Your Shopping Basket:</h2>
                </div>}
                {basket?.map((val, i) => {
                    return (
                        <CheckoutProduct
                        id={val.id}
                        title={val.title}
                        image={val.image}
                        price={val.price}
                        rating={val.rating}
                        />
                    )
                })}
            </div>
            {basket?.length > 0 && (
                <div className="checkout__right">
                    <SubTotal/>
                </div>
            )}
        </div>
    )
}

export default Checkout;