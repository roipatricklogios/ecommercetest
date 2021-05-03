import React from "react";
import './Product.css'
import { useStateValue } from "./StateProvider";

function Product({id,title,image,price,rating}){
    const [{basket}, dispatch] = useStateValue()

    console.log('Cart Content', basket);

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id:id,
                title: title,
                image: image,
                price: price
            }
        })
    }

    return(
        <div className="product">
            <div className="product__info">
                <p className="product_title">{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {
                        Array()
                        .fill()
                        .map(() => (
                            <p>*</p>
                        ))
                    }
                </div>
            </div>
            <img src={image} alt="image_alt"/>
            <button onClick={addToBasket}>Add to Cart</button>
        </div>
    )
}

export default Product;