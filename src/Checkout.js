import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import {useStateValue} from './StateProvider'
import ProductCart from './ProductCart'

function Checkout(){

    const [{basket}] = useStateValue();

    return(
        <div className="checkout">
            <div className="checkout__left">

                {
                    basket?.length === 0 ? (
                        <div>
                            <h2 className="checkout__title">
                                Your Cart is Empty! Nothing to Checkout!
                            </h2>
                            <p>You have no Items on your Cart.</p>
                        </div>
                    ) : (
                        <div>
                            <h2 className="shoppingcarttitle">Items in your Shopping Cart</h2>
                            {
                                basket.map(item => (
                                    <ProductCart
                                        id    = {item.id}
                                        title = {item.title}
                                        image = {item.image}
                                        price = {item.price}
                                    />
                                ))
                            }
                        </div>
                    )
                }

                
            </div>
            {
                basket.length > 0 && (
                    <div className="checkout__right">
                        <Subtotal />
                    </div>
                )
            }
            
        </div>
    )
}

export default Checkout