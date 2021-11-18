import { Fragment } from "react";

import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";

const Meals = () => {
  return (
    <main>
      <MealsSummary />
      <AvailableMeals />
    </main>
  );
};

export default Meals;
