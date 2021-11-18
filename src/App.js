import React from "react";
import OrderScreen from "./screens/OrderScreen";
import { useState } from "react";
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <OrderScreen></OrderScreen>
    </>
  );
};

export default App;
