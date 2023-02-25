import React, { useContext, useEffect, useState } from "react";
import Carticon from "../../Cart/CartIcon";
import classes from "./HeaderCart.module.css";
import CartContext from "../../../store/cart-context";
const HeaderCart = (props) => {
  const [btnHighLight, setBtnHighLight] = useState(false);
  
  const cartCtx = useContext(CartContext);
  const {items}= cartCtx;

  const numberOfCartItems = items.reduce((crrNumber, item) => {
    return crrNumber + item.amount;
  }, 0);

  const btnClasses =`${classes.button} ${btnHighLight? classes.bump: '' }`;
    useEffect (() =>{
      if (items.length === 0) return;
      setBtnHighLight(true);
      const timer =  setTimeout( () => {
        setBtnHighLight(false);
      }, 300);
      return () => {
        clearTimeout(timer);
      }
    }, [items])
  return (
    <>
      <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}>
          {" "}
          <Carticon />{" "}
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
      </button>
    </>
  );
};

export default HeaderCart;
