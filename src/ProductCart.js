import React from 'react'
import './ProductCart.css'
import {useStateValue} from './StateProvider'

function ProductCart({id,title,image,price,rating}){
    
    const [{basket}, dispatch] = useStateValue();

    const removefromcart = () => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id
        })
    }

    return(
        <div className="product__cart__main">
            <img className="product__cart__image" src={image} alt="" />
            <div className="product__cart__details">
                <p className="product__cart__title">{title}</p>
                <p className="product__cart__price">${price}</p>
                
                <div className="product__cart__rating">
                    {
                        Array(rating)
                        .fill()
                        .map((_) => (
                            <span>*</span>
                        ))
                    }
                </div>
                <button className="produc__cart__removebtn" onClick={removefromcart}>Remove from Your Cart List</button>
            </div>
        </div>
    )
}

export default ProductCart