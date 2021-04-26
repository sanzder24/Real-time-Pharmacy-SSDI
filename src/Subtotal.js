import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from "./stateProvider";
import { getBasketTotal } from "./reducer";
import { useHistory} from "react-router-dom";

function Subtotal() {
    const history = useHistory();
    const [{ basket }] = useStateValue();

    return (
        <div className="subtotal">
            <CurrencyFormat
             renderText={(formattedValue) => (
          <>
            <p>
              Subtotal({basket.length} items) : <strong>{`${formattedValue}`}</strong>
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
            <button  className="button_slide slide_right" onClick={e => history.push('/payment')}>Proceed to Checkout </button>
        </div>
    )
}
export default Subtotal
