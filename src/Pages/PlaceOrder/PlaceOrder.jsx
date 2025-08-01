import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../Context/StoreContext'

const PlaceOrder = () => {
  const {getTotalCartAmount} = useContext(StoreContext);
  return (
    <form className="place-order">
      <div className="place-order-left">
          <p className="title">Delivery Information</p>
          <div className="multi-fields">
            <input type="text" placeholder='First Name'/>
            <input type="text" placeholder='First Name'/>
          </div>
          <input type="email" placeholder='Your email'/>
          <input type="text" placeholder='street'/>
          <div className="multi-fields">
            <input type="text" placeholder='City'/>
            <input type="text" placeholder='State'/>
          </div>
          <div className="multi-fields">
            <input type="text" placeholder='City Code'/>
            <input type="text" placeholder='Country'/>
          </div>
          <input type="text"  placeholder='Phone Number'/>
      </div>
      <div className="place-order-right">
      <div className="cart-total">
          <h1>Cart Totals</h1>
          <div>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>#{getTotalCartAmount()}</p>
          </div>
          <hr/>
          <div className="cart-total-details">
            <p>Deliver Fee</p>
            <p>#{getTotalCartAmount()===0?0:1600}</p>
          </div>
          <hr/>
          <div className="cart-total-details">
            <b>Total</b>
            <b>#{getTotalCartAmount()===0?0:getTotalCartAmount()+1600}</b>
          </div>
        </div>
          <button>Proceed to Payment</button>
      </div>
      </div>
    </form>
  )
}

export default PlaceOrder