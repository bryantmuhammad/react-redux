import { Fragment, useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import Notification from "./components/Notification/Notification";
import { sendCartData, fetchCartData } from "./store/cart-actions";

let isInitial = true;

function App() {
  const isShowed = useSelector((state) => state.cart.isShowed);
  const cart = useSelector((state) => state.cart.cartItems);
  const changed = useSelector((state) => state.cart.changed);
  const notification = useSelector((state) => state.notification.notification);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    console.log(cart);
    if (changed) {
      dispatch(
        sendCartData({
          items: cart.items || [],
          totalQuantity: cart.totalQuantity,
        })
      );
    }
  }, [cart]);

  return (
    <Fragment>
      {notification && (
        <Notification
          title={notification.title}
          message={notification.message}
          status={notification.status}
        />
      )}
      <Layout>
        {isShowed && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
