import { useEffect, useState } from "react";
import axios from 'axios';

export const useGetProducts = (id) => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		async function fetchData() {
			let response = {}
			if (id) {
				response = await axios(`${process.env.REACT_APP_API_URL}/api/v1/categories/${id}/products`);
			} else {
				response = await axios(`${process.env.REACT_APP_API_URL}/api/v1/products`);
			}
			setProducts(response.data);
		}
		fetchData();
	}, []);
	return products;
};

export const useGetCategories = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const response = await axios(`${process.env.REACT_APP_API_URL}/api/v1/categories`);
			setCategories(response.data);
		}
		fetchData();
	}, []);

	return categories;
};