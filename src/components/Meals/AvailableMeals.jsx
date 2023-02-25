import React from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import Mealitem from "./MealItem/Mealitem";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "fried chicken",
    description: "delicious food in the Day ",
    price: 22.99,
  },
  {
    id: "m2",
    name: "shawarma",
    description: "A shawarma is Syrian Food Specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];
const AvailableMeals = () => {
  const mealList = DUMMY_MEALS.map((meal) => (
    <Mealitem
      key={meal.id}
      id ={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <>
      <section className={classes.meals}>
        <Card>
          <ul>{mealList}</ul>
        </Card>
      </section>
    </>
  );
};

export default AvailableMeals;
