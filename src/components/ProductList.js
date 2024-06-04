import React, { useState } from 'react';

const productList = [
  { name: 'Product 1', category: 'A', price: 100, rating: 4.5 },
  { name: 'Product 2', category: 'B', price: 200, rating: 3.0 },
  { name: 'Product 3', category: 'A', price: 150, rating: 5.0 },
  { name: 'Product 4', category: 'C', price: 250, rating: 4.0 },
  { name: 'Product 5', category: 'B', price: 300, rating: 2.5 },
];

const ProductList = () => {
  const [products, setProducts] = useState(productList);

  const sortByLowPrice = () => {
    const sortedProducts = [...products].sort((a, b) => a.price - b.price);
    setProducts(sortedProducts);
  };

  const sortByCategory = () => {
    const sortedProducts = [...products].sort((a, b) =>
      a.category.localeCompare(b.category)
    );
    setProducts(sortedProducts);
  };

  const handleSortChange = (e) => {
    if (e.target.value === 'lowPrice') {
      sortByLowPrice();
    }
    if (e.target.value === 'category') {
      sortByCategory();
    }
  };
  return (
    <div>
      <h1> Display The Products</h1>
      <select onChange={handleSortChange}>
        <option value=''>Sort By</option>
        <option value='lowPrice'>Low Price</option>
        <option value='category'>Category</option>
      </select>
      {products.map((product) => (
        <div key={product.name}>
          <h2>Name: {product.name}</h2>
          <h3>Price: {product.price}</h3>
          <h3>Rating: {product.rating}</h3>
          <h3>Category: {product.category}</h3>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
