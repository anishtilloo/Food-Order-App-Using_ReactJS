import BackgroundImage from "./BackgroundImage";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Meals</h1>
        <HeaderCartButton showCartHandler={props.onShowCartHandler} />
      </header>
      <BackgroundImage />
    </>
  );
};

export default Header;
