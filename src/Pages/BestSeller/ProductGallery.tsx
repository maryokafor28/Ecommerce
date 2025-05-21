import React from "react";
import "./ProductGallery.css";
import {
  Product1,
  Product2,
  Product3,
  Product4,
  Product5,
  Product6,
  Product7,
  Product8,
  Product9,
  Product10,
} from "../../icons/icons";

interface Product {
  id: number;
  image: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  category: string;
  oldPrice: string;
  newPrice: string;
}

const products: Product[] = [
  {
    id: 1,
    image: Product1,
    title: "Graphic Design",
    category: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
  {
    id: 2,
    image: Product2,
    title: "Graphic Design",
    category: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
  {
    id: 3,
    image: Product3,
    title: "Graphic Design",
    category: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
  {
    id: 4,
    image: Product4,
    title: "Graphic Design",
    category: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
  {
    id: 5,
    image: Product5,
    title: "Graphic Design",
    category: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
  {
    id: 6,
    image: Product6,
    title: "Graphic Design",
    category: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
  {
    id: 7,
    image: Product7,
    title: "Graphic Design",
    category: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
  {
    id: 8,
    image: Product8,
    title: "Graphic Design",
    category: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
  {
    id: 9,
    image: Product9,
    title: "Graphic Design",
    category: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
  {
    id: 10,
    image: Product10,
    title: "Graphic Design",
    category: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
];

const ProductCard: React.FC<Product> = ({
  image: Image,
  title,
  category,
  oldPrice,
  newPrice,
}) => (
  <div className="product-card">
    <Image className="product-image" />
    <h3 className="product-title">{title}</h3>
    <p className="product-category">{category}</p>
    <div className="product-price">
      <span className="old-price">{oldPrice}</span>
      <span className="new-price">{newPrice}</span>
    </div>
  </div>
);

function ProductGallery() {
  return (
    <section className="product-section">
      <div className="product-header">
        <h4>Featured Products</h4>
        <h2>BESTSELLER PRODUCTS</h2>
        <p>Problems trying to resolve the conflict between</p>
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      <div className="load-more-wrapper">
        <button className="load-more">LOAD MORE PRODUCTS</button>
      </div>
    </section>
  );
}

export default ProductGallery;
