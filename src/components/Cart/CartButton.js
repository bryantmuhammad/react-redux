import classes from "./CartButton.module.css";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/CartStore";

const CartButton = (props) => {
  const isShowed = useSelector((state) => state.cart.isShowed);
  const totalQuantity = useSelector(
    (state) => state.cart.cartItems.totalQuantity
  );
  const dispatch = useDispatch();

  const toggleCartHandler = () => {
    dispatch(cartActions.toggleCart());
  };

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>

      {totalQuantity > 0 && (
        <span className={classes.badge}>{totalQuantity}</span>
      )}
    </button>
  );
};

export default CartButton;
