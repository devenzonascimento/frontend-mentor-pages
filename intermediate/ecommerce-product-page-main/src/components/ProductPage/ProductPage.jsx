import { useContext } from "react";
import { ProductCartContext } from "../../context/ProductsCardContext";

import ArrowNavCarousel from "./ArrowNavCarousel";
import ProductDescription from "./ProductDescription";
import AddToCartButton from "./AddToCartButton";
import ProductPrice from "./ProductPrice";
import QuantityButton from "./QuantityButton";

import "./style.scss";
import ThumbNavCarousel from "./ThumbNavCarousel";

const ProductPage = () => {
  const { storeProducts } = useContext(ProductCartContext);

  return (
    <main>
      {document.body.offsetWidth < 1024 && (
        <>
          <ArrowNavCarousel images={storeProducts[1].images} />
        </>
      )}
      {document.body.offsetWidth >= 1440 && (
        <>
          <ThumbNavCarousel
            images={storeProducts[1].images}
            thumbnails={storeProducts[1].thumbnails}
          />
        </>
      )}

      <div className="description-container">
        <ProductDescription productInfo={storeProducts[1]} />
        <ProductPrice productInfo={storeProducts[1]} />
        <div className="order-container">
          <QuantityButton />
          <AddToCartButton />
        </div>
      </div>
    </main>
  );
};

export default ProductPage;
