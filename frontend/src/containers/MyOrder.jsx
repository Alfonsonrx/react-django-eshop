import React from 'react';
import OrderItem from '../components/OrderItem';
import { useSelector } from 'react-redux';

import '../styles/MyOrder.scss';
import flechita from '../assets/icons/flechita.svg';
import { Navigate } from 'react-router-dom';

const MyOrder = () => {
	const { cart }=useSelector((state)=>state.cart);

	const sumTotal = () => {
		const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
		const sum = cart.reduce(reducer, 0);
		return sum;
	}

	const handleCheckout = () => {
		<Navigate to={'/checkout'} replace/>
	}

    return (
        <aside className="MyOrder">
			<div className="title-container">
				<img src={flechita} alt="arrow" />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{cart.map((product, index)=>(
					<OrderItem indexValue={index} key={index} product={product} />
				))}
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal()}</p>
				</div>
				<a href="/checkout">
					<button className="primary-button">
						Checkout
					</button>
				</a>
			</div>
		</aside>
    );
}

export default MyOrder;