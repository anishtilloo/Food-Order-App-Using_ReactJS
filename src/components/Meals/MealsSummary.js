import classes from "./MealsSummary.module.css";

const MealsSummary = (props) => {
  return (
    <div className={classes.meals_summary}>
      <h1>Delicious Food Delivered To You</h1>
      <p>
        Choose your favorite food from our broad selection of available food and
        enjoy a delicious lunch or dinner at home
      </p>
      <p>
        All of our food are cooked with high-quality ingredients, just-in-time
        and of course by experienced chef!!!
      </p>
    </div>
  );
};

export default MealsSummary;
