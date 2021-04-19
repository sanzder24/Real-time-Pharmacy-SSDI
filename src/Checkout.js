import React from 'react'
import {useStateValue} from "./stateProvider";
import './Checkout.css';
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from 'react-currency-format';
import Subtotal from './Subtotal';

function Checkout() {
    
    const [{basket}] =useStateValue();

    return (
        <div className="checkout">

        <div className="checkout__left">
        <img className="checkout__ad" alt="" src="https://images-na.ssl-images-amazon.com/images/G/01/credit/img18/SecureCard/PF/SecureCard_PR_Header.jpg">
        </img>
        {basket?.length === 0 ? (
          <div>
            <h2>Your shopping basket is empty</h2>
            <p> You have no itmes in your basket.</p>
          </div>
        ) : (
          <div>
            <h3 className="checkout__title">Your Shopping Basket</h3>
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              ></CheckoutProduct>
            ))}
          </div>
        )}
        </div>
        {basket?.length > 0 && <div className="checkout__right">
        <Subtotal />
        </div>}
        
        </div>
    )
}

export default Checkout
