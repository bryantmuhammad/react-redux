import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useDispatch } from "redux";
import { useSelector } from "react-redux";

function App() {
  const isShowed = useSelector((state) => state.cart.isShowed);

  return (
    <Layout>
      {isShowed && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
