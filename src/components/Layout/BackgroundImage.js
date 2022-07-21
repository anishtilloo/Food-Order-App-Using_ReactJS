import bgImage from "../../assets/bg-img/meals.jpg";
import classes from "./BackgroundImage.module.css";

const BackgroundImage = (props) => {
  return (
    <div className={classes["main-image"]}>
      <img src={bgImage} alt="BackgroundImage" />
    </div>
  );
};

export default BackgroundImage;
