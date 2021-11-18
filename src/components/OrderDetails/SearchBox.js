import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../UI/Card";
import classes from "./SearchBox.module.css";

const SearchBox = () => {
  const [orderId, setOrderId] = useState("");
  const [inputValid, setInputValid] = useState(true);
  const inputRef = useRef();

  const navigate = useNavigate();

  const submitHandler = () => {
    if (orderId.trim() === "") {
      setInputValid(false);
      console.log(inputValid);
      return;
    }
    setInputValid(true);
    navigate(`/order/${orderId}`);
  };

  return (
    <div className={classes.orderDetails}>
      <Card className={classes.searchBoxContainer}>
        <div>
          <h2>Enter Your Order ID</h2>
          <div
            className={`${classes.searchBox} ${
              !inputValid ? classes.invalid : ""
            } `}
          >
            <label htmlFor="orderId">Order ID:</label>
            <input
              type="text"
              id="orderId"
              ref={inputRef}
              onChange={() => {
                setOrderId(inputRef.current.value);
              }}
            />
            {!inputValid && (
              <p style={{ color: "red" }}>Please Enter Valid ID</p>
            )}
          </div>
          <button className={classes.button} onClick={submitHandler}>
            Search
          </button>
        </div>
      </Card>
    </div>
  );
};

export default SearchBox;
