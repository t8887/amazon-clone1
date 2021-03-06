import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal.js"
 import CheckoutProduct from "./CheckoutProduct.js"
import { useStateValue } from "./StateProvider";

function Checkout() {
    const [{basket, user}, dispatch] =useStateValue();
    return <div className="checkout">
        <div className="checkout__left">
            <img className="checkout__ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/img16/GiftCards/LPAIndia/Header/170_AP_1500x300.jpg"/>

            <div>
                <h3>Hello, {user?.email}</h3>
                <h2 className="checkout__title">Your Amazon Cart</h2>

                {basket.map(item => (
                    <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    />
                )
                )
                }
            </div>
        </div>
        <div className="checkout__left">
            <Subtotal />

        </div>
    </div>;

    
} export default Checkout;