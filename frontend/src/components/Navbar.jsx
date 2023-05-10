import React,{useState} from 'react';
import '../styles/Header.scss';
import Menu from './Menu';
import MyOrder from '../containers/MyOrder';
import menu from '../assets/icons/icon_menu.svg';
import logo from '../assets/logos/logo_yard_sale.svg';
import shoppingCart from '../assets/icons/icon_shopping_cart.svg';
import { useSelector } from 'react-redux';
import { useGetCategories } from '../hooks/useGet';

const Header = () => {
	const categories = useGetCategories();

	const [toggle, setToggle] = useState(false);
	const [toggleOrders, setToggleOrders] = useState(false);
	const {cart}=useSelector((state)=>state.cart);

	const handleToggle = () => {
		setToggle(!toggle);
	}

	return (
		<nav>
			<img src={menu} alt="menu" className="menu" />
			<div className="navbar-left">
				<img src={logo} alt="logo" className="nav-logo" />
				<ul>
					<li>
						<a href="/">All</a>
					</li>
					{categories.map(category => (
						<li key={category.id}>
							<a href={"/category/"+category.id}>{category.name}</a>
						</li>
					))}
				</ul>
			</div>
			<div className="navbar-right">
				<ul>
					<li className="navbar-email" onClick={handleToggle}>
						platzi@example.com
					</li>
					<li className="navbar-shopping-cart" onClick={()=>setToggleOrders(!toggleOrders)}>
						<img src={shoppingCart} alt="shopping cart" />
						{ cart.length > 0 ? <div>{cart.length}</div> : null}
					</li>
				</ul>
			</div>
			{toggle && <Menu />}
			{toggleOrders && <MyOrder />}
		</nav>
	);
}

export default Header;
