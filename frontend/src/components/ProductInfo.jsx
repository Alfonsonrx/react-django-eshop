import React from 'react';
import '../styles/ProductInfo.scss'
import { addToCart } from '../redux/cartSlice';

import addToCartIcon from '../assets/icons/bt_add_to_cart.svg'
import { useDispatch } from 'react-redux';

const ProductInfo = ({ product }) => {
    const dispatch = useDispatch()

    return (
        <>
            <img src={product.images[0]} alt="bike" />
            <div className="ProductInfo">
                <p>${ product.price }</p>
                <p>{ product.title }</p>
                <p>{ product.description }</p>
                <button className="primary-button add-to-cart-button" onClick={() => dispatch(addToCart(product))} >
                    <img src={addToCartIcon} alt="add to cart" />
                    Add to cart
                </button>
            </div>
        </>
    );
}

export default ProductInfo;