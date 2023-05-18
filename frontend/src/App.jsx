import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './containers/Layout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Checkout from './pages/Checkout';
import PostProduct from './pages/PostProduct';
import PostCategory from './pages/PostCategory';
import './styles/global.css';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
						<Route exact path="/" element={<Home />} />
						<Route exact path="/category/:id" element={<Home />} />
						<Route exact path="/checkout" element={<Checkout />} />
						<Route exact path="/insert-product" element={<PostProduct />} />
						<Route exact path="/insert-category" element={<PostCategory />} />
						<Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
