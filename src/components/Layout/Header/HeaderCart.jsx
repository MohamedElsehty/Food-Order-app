import React from "react";
import Carticon from "../../Cart/CartIcon";
import classes from "./HeaderCart.module.css";
const HeaderCart = (props) => {
  return (
    <>
      <button className={classes.button}> 
        <span className={classes.icon}> <Carticon/> </span>
        <span >Your Cart</span>
        <span className={classes.badge}>5</span>
      </button>
    </>
  );
};

export default HeaderCart;
