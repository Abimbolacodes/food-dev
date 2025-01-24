import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'

const FoodItem = ({id,name,price,description,image}) => {

  // const [itemCount, setItemCount] = useState(0)
  let {cartItems, removeFromCart, addToCart} = useContext(StoreContext);
  return (
    <div className='food-item'>
        <div className="food-item-img-container">
            <img className='food-item-image w-60 h-60' src={image} alt="" />
            {!cartItems[id]
              ?<img className='add' onClick={()=>addToCart(id)} src={assets.Add_2} alt="" />
              :<div className="food-item-counter">
                <img onClick={()=>removeFromCart(id)} src={assets.minus2} alt="" />
                <p>{cartItems[id]}</p>
                <img onClick={()=>addToCart(id)} src={assets.plus3} alt="" />
              </div>
            }
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating} alt="" />
            </div>
            <p className="food-item-desc">{description}</p>
            <p className="food-item-price">#{price}</p>
        </div>
    </div>
  )
}

export default FoodItem