import React from 'react';
import { useDispatch } from 'react-redux';

import '../styles/ProductItem.scss'
import addToCartImage from '../assets/icons/bt_add_to_cart.svg';

import { addToCart } from '../redux/cartSlice';
import { openDetail } from '../redux/productDetailSlice';


const ProductItem = ({ product }) => {
    const dispatch = useDispatch()

    return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<a onClick={()=>dispatch(openDetail(product))}>
						{product.title}
					</a>
				</div>
				<figure onClick={() => dispatch(addToCart(product))} >
					<img src={addToCartImage} alt="" />
				</figure>
			</div>

		</div>
	);
}

export default ProductItem;