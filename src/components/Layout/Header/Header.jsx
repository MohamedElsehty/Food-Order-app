import React from "react";
import imageMeals from "../../../assets/meals.jpg";
import styles from "./Header.module.css";
import HeaderCart from "./HeaderCart";
const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCart onClick={props.onShowCart} /> 
      </header>
      <div className={styles["main-image"]}>
        <img src={imageMeals} alt="Meals" />
      </div>
    </>
  );
};

export default Header;
