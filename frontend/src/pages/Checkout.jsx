import React from 'react';
import { useSelector } from 'react-redux';

import OrderItem from '../components/OrderItem';
// import Menu from '../components/Menu';
import '../styles/Checkout.scss';

const Checkout = () => {
	let { cart } = useSelector((state)=>state.cart);

	const sumTotal = () => {
		const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
		const sum = cart.reduce(reducer, 0);
		return sum;
	}

	let cartLength = Object.keys(cart).length;

	const date = new Date();
	let day = date.getDate();
	let month = date.getMonth() + 1;
	let year = date.getFullYear();

	let fullDate = `${month}/${day}/${year}`;

	return (
		<div className="Checkout">
			<div className="Checkout-container">
				<h1 className="title">My order</h1>
				<div className="Checkout-content">
					<div className="order">
						<p>
							<span>{fullDate}</span>
							<span>{cartLength} articles</span>
						</p>
						<p>${sumTotal()}</p>
					</div>
				</div>
				{cart.map((product, index)=>(
					<OrderItem indexValue={index} key={index} product={product} />
				))}
			</div>
		</div>
	);
}

export default Checkout;
