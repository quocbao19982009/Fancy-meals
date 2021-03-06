import React from "react";
import OrderScreen from "./screens/OrderScreen";
import { useState } from "react";
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
import { Route, Routes } from "react-router-dom";
import CheckOrderScreen from "./screens/CheckOrderScreen";
import OrderDetailsScreen from "./screens/OrderDetailsScreen";
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
      <div className="body-container">
        <Header onShowCart={showCartHandler} />
        {cartIsShown && <Cart onClose={hideCartHandler} />}
        <Routes>
          <Route path="/" element={<OrderScreen />}></Route>
          <Route path="/order/" element={<CheckOrderScreen />}></Route>
          <Route path="/order/:id" element={<OrderDetailsScreen />}></Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
