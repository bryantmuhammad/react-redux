import { notificationActions } from "./NotificationStore";
import { cartActions } from "./CartStore";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        `https://react-demo-15fec-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json`
      );

      if (!response.ok) {
        throw new Error("Failed fetch data");
      }

      const data = await response.json();

      return data;
    };

    try {
      const cartItems = await fetchData();
      console.log(cartItems);
      dispatch(cartActions.replaceCart(cartItems));
    } catch (error) {
      dispatch(
        notificationActions.showNotification({
          status: "error",
          title: "Failed",
          message: "Failed fetch cart data",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      notificationActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data",
      })
    );

    const sendData = async () => {
      console.log(cart);
      const response = await fetch(
        "https://react-demo-15fec-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error("Failed fetch data");
      }
    };

    try {
      await sendData();
      dispatch(
        notificationActions.showNotification({
          status: "success",
          title: "Success",
          message: "Success sending cart data",
        })
      );
    } catch (error) {
      sendCartData().catch((error) => {
        dispatch(
          notificationActions.showNotification({
            status: "error",
            title: "Failed",
            message: "Failed sending cart data",
          })
        );
      });
    }
  };
};
