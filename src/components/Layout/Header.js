import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <Link to="/" className={classes.logo}>
          FANCY MEALS
        </Link>
        <div className={classes.nav}>
          <Link to="/order/" className={classes.nav_link}>
            Check Order
          </Link>
          <Link to="/" className={classes.nav_link}>
            Menu
          </Link>

          <HeaderCartButton onClick={props.onShowCart} />
        </div>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </>
  );
};

export default Header;
