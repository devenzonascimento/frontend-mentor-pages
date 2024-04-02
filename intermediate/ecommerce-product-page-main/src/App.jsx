import Header from "./components/Header/Header";
import ProductPage from "./components/ProductPage/ProductPage";

import { ProductCartProvider } from "./context/ProductsCardContext";

const App = () => {
  return (
    <ProductCartProvider>
      <Header />
      <ProductPage />
    </ProductCartProvider>
  );
};

export default App;


