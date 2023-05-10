import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeAndClear } from '../redux/productDetailSlice';

import ProductInfo from '../components/ProductInfo';

import '../styles/ProductDetail.scss';
import close from '../assets/icons/icon_close.png';

const ProductDetail = () => {
	const dispatch = useDispatch()

	let { product } = useSelector((state)=>state.prodDetail)

	return (
		<div className="ProductDetail">
			<div className="ProductDetail-close" onClick={()=>dispatch(closeAndClear())}>
				<img src={close} alt="close"/>
			</div>
			<ProductInfo product={product} />
		</div>
	);
}

export default ProductDetail;
