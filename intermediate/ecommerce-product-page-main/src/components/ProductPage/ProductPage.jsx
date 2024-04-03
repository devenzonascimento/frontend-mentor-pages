import { useContext } from "react";
import { ProductCartContext } from "../../context/ProductsCardContext";

import Carousel from "./Carousel";
import ProductDescription from "./ProductDescription";
import AddToCartButton from "./AddToCartButton";
import ProductPrice from "./ProductPrice";
import QuantityButton from "./QuantityButton";

import "./style.scss";

const ProductPage = () => {

  const { storeProducts } = useContext(ProductCartContext)
  

  return (
    <main>
      <Carousel images={storeProducts[1].images}/>
      <div className="description-container">
        <ProductDescription productInfo={storeProducts[1]}/>
        <ProductPrice productInfo={storeProducts[1]}/>
        <QuantityButton />
        <AddToCartButton />
      </div>
    </main>
  );
};

export default ProductPage;
