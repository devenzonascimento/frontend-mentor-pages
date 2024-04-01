import Carousel from "./Carousel";
import ProductDescription from "./ProductDescription";

import AddToCartButton from "./AddToCartButton";
import ProductPrice from "./ProductPrice";
import QuantityButton from "./QuantityButton";

import "./style.scss";

const ProductPage = () => {
  return (
    <main>
      <Carousel />
      <div className="description-container">
        <ProductDescription />
        <ProductPrice />
        <QuantityButton />
        <AddToCartButton />
      </div>
    </main>
  );
};

export default ProductPage;
