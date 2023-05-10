import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useGetCategories, useGetProducts } from '../hooks/useGet';
import { useSelector } from 'react-redux';

import ProductItem from '../components/ProductItem';
import ProductDetail from '../containers/ProductDetail';

import '../styles/ProductList.scss';

const ProductList = () => {
    const { detailShowed } = useSelector(state=>state.prodDetail)
	
	let { id } = useParams();

	const products = useGetProducts(id);

    return (
        <section className="main-container">
			<div className="ProductList">
				{products.map(product => (
					<ProductItem product={product} key={product.id} />
				))}
			</div>
			{detailShowed && <ProductDetail />}
		</section>
    );
}

export default ProductList;