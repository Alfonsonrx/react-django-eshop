import React from 'react';
import { useDispatch } from 'react-redux';
import '../styles/OrderItem.scss'

import { removeFromCart } from '../redux/cartSlice';

import close from '../assets/icons/icon_close.png';
import defaultImage from '../assets/Default.png';

const OrderItem = ({ product, indexValue }) => {
    const dispatch = useDispatch()

	const prod_image = product.images.length > 0 ? product.images[0] : defaultImage;

    return (
        <div className="OrderItem">
			<figure>
				<img src={prod_image} alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>${product.price}</p>
			<img src={close} alt="close" onClick={() => dispatch(removeFromCart(indexValue))} />
		</div>
    );
}

export default OrderItem;