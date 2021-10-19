import React from "react";
import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food, Delivered to You</h2>
      <p>
        Choose Your favourite meal from our broad selection of meals and enjoy a
        delicious lunch or dinner at home
      </p>
      <p>
        All meals are cooked with high-quality ingredients, just-in-time and of
        course by our experienced chefs!
      </p>
    </section>
  );
};

export default MealsSummary;
