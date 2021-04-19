import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from "./stateProvider";
import { getBasketTotal } from "./reducer";

function Subtotal() {
    const [{ basket }] = useStateValue();

    return (
        <div className="subtotal">
            <CurrencyFormat
             renderText={(formattedValue) => (
          <>
            <p>
              Subtotal({basket.length} itmes) : <strong>{`${formattedValue}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
      />
            <button>Proceed to Checkout</button>
        </div>
    )
}
export default Subtotal
