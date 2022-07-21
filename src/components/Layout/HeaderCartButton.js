import { useContext, useEffect, useState } from "react";

import CartContext from "../../context/cart-context";
import CartIcon from "../Icons/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  // this HeaderCartButton will be reevaluated by react whenever the context changes
  const cartContext = useContext(CartContext);
  const [buttonIsHighLighted, setButtonIsHighLighted] = useState(false);

  const { items } = cartContext;
  const numberOfCartItems = items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  const buttonClasses = `${classes.button} ${
    buttonIsHighLighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }

    setButtonIsHighLighted(true);

    const timer = setTimeout(() => {
      setButtonIsHighLighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button onClick={props.showCartHandler} className={buttonClasses}>
      {/* 1 wrap icon */}
      <span className={classes.icon}>
        <CartIcon />
      </span>
      {/* 2 wrap text */}
      <span>Cart</span>
      {/* 3 wrap batch */}
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
