import { useEffect, useState } from "react";
import axios from 'axios';

export const useGetProducts = (id) => {
	const [products, setProducts] = useState([]);
	useEffect((id) => {
		async function fetchData() {
			let response = await axios(`${process.env.REACT_APP_API_URL}/api/v1/product/`);
			// let response = await axios('http://localhost:8000/api/v1/product/');
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
			// const response = await axios(`${process.env.REACT_APP_API_URL}/api/v1/categories`);
			const response = await axios(`${process.env.REACT_APP_API_URL}/api/v1/categories/`);
			setCategories(response.data);
		}
		fetchData();
	}, []);

	return categories;
};