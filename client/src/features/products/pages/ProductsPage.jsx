import React from "react";
import ProductList from "../components/ProductList/ProductList";
import ProductFilters from "../components/ProductFilters";
import useProducts from "../hooks/useProducts";
import sleepImage from "../../../assets/sleep.png";
import "./ProductsPage.css";

const ProductsPage = () => {
  const { products, loading, error, filters, setFilters } = useProducts();

  return (
    <div className="products-page">
      <div className="products-hero">
        <img src={sleepImage} alt="Sleep" className="hero-image" />
        <h1 className="hero-title">Our Products</h1>
      </div>
      <div className="products-content">
        <ProductFilters filters={filters} onFilterChange={setFilters} />
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error}</div>
        ) : (
          <ProductList products={products} />
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
