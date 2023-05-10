import React from 'react';
import { useDispatch } from 'react-redux';
import '../styles/OrderItem.scss'

import { removeFromCart } from '../redux/cartSlice';

import close from '../assets/icons/icon_close.png';

const OrderItem = ({ product, indexValue }) => {
    const dispatch = useDispatch()

	// const handleRemove = (index) => {
	// 	removeFromCart(index);
	// }

    return (
        <div className="OrderItem">
			<figure>
				<img src={product.images[0]} alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>${product.price}</p>
			<img src={close} alt="close" onClick={() => dispatch(removeFromCart(indexValue))} />
		</div>
    );
}

export default OrderItem;