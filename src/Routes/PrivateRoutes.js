import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Component/Home';
import Categories from '../Component/Categories';
import ProductDetails from '../Component/ProductDetails';
import CategoriesDetails from '../Component/CategoriesDetails';
import Whishlist from '../Component/Whishlist';
import Cart from '../Component/Cart';

const PrivateRoutes = ({ filterValue, setSelectedProducts, selectedProducts }) => {
  return (
    <Routes>
      <Route path="/" element={<Home filterValue={filterValue} />} />
      <Route
        path="/categories"
        element={<Categories
          filterValue={filterValue}
          setSelectedProducts={setSelectedProducts}
          selectedProducts={selectedProducts}
        />}
      />
      <Route path="/product-detail/:productId" element={<ProductDetails setSelectedProducts={setSelectedProducts}
        selectedProducts={selectedProducts} />} />

      <Route path="/categories-detail/:productId" element={<CategoriesDetails setSelectedProducts={setSelectedProducts}
        selectedProducts={selectedProducts} />} />

      <Route
        path="/whishlist"
        element={<Whishlist filterValue={filterValue}
          selectedProducts={selectedProducts}
          setSelectedProducts={setSelectedProducts}
        />} />

      <Route path="/Cart/:productId" element={<Cart />} />
    </Routes>
  );
};

export default PrivateRoutes;
