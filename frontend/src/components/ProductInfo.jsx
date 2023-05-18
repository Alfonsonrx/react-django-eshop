import React from 'react';
import '../styles/ProductInfo.scss'
import { addToCart } from '../redux/cartSlice';

import addToCartIcon from '../assets/icons/bt_add_to_cart.svg';
import defaultImage from '../assets/Default.png';

import { useDispatch } from 'react-redux';

const ProductInfo = ({ product }) => {
    const dispatch = useDispatch()

	const prod_image = product.images.length > 0 ? product.images[0] : defaultImage;
    
    return (
        <>
            <img src={prod_image} alt="bike" />
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