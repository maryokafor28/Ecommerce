import { useState } from "react";
import { useGetProductsQuery } from "../../Services/ProductApi";
import "./ProductGallery.css";

// Define the Product type based on expected product properties
type Product = {
  id: number;
  title: string;
  category: string;
  price: number;
  discountPercentage: number;
  thumbnail: string;
};

type ProductCardProps = {
  image: string;
  title: string;
  category: string;
  oldPrice: string;
  newPrice: string;
};

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  category,
  oldPrice,
  newPrice,
}) => (
  <div className="product-card">
    <img src={image} alt={title} className="product-image" />
    <h3 className="product-title">{title}</h3>
    <p className="product-category">{category}</p>
    <div className="product-price">
      <span className="old-price">{oldPrice}</span>
      <span className="new-price">{newPrice}</span>
    </div>
  </div>
);

function ProductGallery() {
  const [skip, setSkip] = useState(0);
  const limit = 10;

  const { data, isLoading, isError } = useGetProductsQuery({ limit, skip });

  const handleLoadMore = () => {
    setSkip((prev) => prev + limit);
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong.</p>;

  return (
    <section className="product-section">
      <div className="product-header">
        <h4>Featured Products</h4>
        <h2>BESTSELLER PRODUCTS</h2>
        <p>Problems trying to resolve the conflict between</p>
      </div>

      <div className="product-grid">
        {data.products.map((product: Product) => {
          const oldPrice: number =
            product.price + (product.price * product.discountPercentage) / 100;

          return (
            <ProductCard
              key={product.id}
              image={product.thumbnail}
              title={product.title}
              category={product.category}
              oldPrice={`$${oldPrice.toFixed(2)}`}
              newPrice={`$${product.price.toFixed(2)}`}
            />
          );
        })}
      </div>

      <div className="load-more-wrapper">
        <button className="load-more" onClick={handleLoadMore}>
          LOAD MORE PRODUCTS
        </button>
      </div>
    </section>
  );
}

export default ProductGallery;
