import classes from "./CartButton.module.css";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/CartStore";

const CartButton = (props) => {
  const isShowed = useSelector((state) => state.cart.isShowed);
  const dispatch = useDispatch();

  const toggleCartHandler = () => {
    dispatch(cartActions.toggleCart());
  };

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
