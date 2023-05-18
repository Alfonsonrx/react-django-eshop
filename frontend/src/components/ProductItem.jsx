import React from 'react';
import { useDispatch } from 'react-redux';

import '../styles/ProductItem.scss'
import addToCartImage from '../assets/icons/bt_add_to_cart.svg';
import defaultImage from '../assets/Default.png';

import { addToCart } from '../redux/cartSlice';
import { openDetail } from '../redux/productDetailSlice';


const ProductItem = ({ product }) => {
    const dispatch = useDispatch()

	const prod_image = product.images.length > 0 ? product.images[0] : defaultImage;
    return (
		<div className="ProductItem">
			<img src={prod_image} alt={product.title} />
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