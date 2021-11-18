import ReactDOM from "react-dom";
import CartProvider from "./store/CartProvider";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <CartProvider>
      <App />
    </CartProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
