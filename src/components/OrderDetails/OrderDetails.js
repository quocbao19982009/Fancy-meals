import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Card from "../UI/Card";
import ItemsTable from "./ItemsTable";
import classes from "./OrderDetails.module.css";

const OrderDetails = () => {
  const params = useParams();
  const orderId = params.id;

  const [order, setOrder] = useState({});
  const {
    createAt = "",
    total = "",
    orderedItems: items = [],
    user = {},
  } = order;

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  console.log(order);
  console.log(orderId);

  useEffect(() => {
    const fetchOrder = async () => {
      setLoading(true);
      const respone = await fetch(
        `https://react-testing-http-7f660-default-rtdb.europe-west1.firebasedatabase.app/orders/${orderId}.json`
      );
      if (respone === null) {
        setError("Cannot Find Order");
      }
      const data = await respone.json();
      setOrder(data);
      setLoading(false);
    };
    try {
      fetchOrder();
    } catch (error) {
      throw new Error(error.message);
    }
  }, [orderId]);

  const orderDetailContent = (
    <>
      <h1>Order ID: {orderId}</h1>
      <div className={classes.orderDetails}>
        <div className={classes.userInfo}>
          <h2>Deliver Info: </h2>
          <div>
            <strong>Name:</strong> {user.name}
          </div>
          <div>
            <strong>City:</strong> {user.city}
          </div>
          <div>
            <strong>Postal Code:</strong> {user.postalCode}
          </div>
          <div>
            <strong>Street:</strong> {user.street}
          </div>
          <div>
            <strong>Order At:</strong> {createAt}
          </div>
        </div>
        <div className={classes.orderItems}>
          <h2>Order Info:</h2>
          <ItemsTable items={items} total={total}></ItemsTable>
        </div>
      </div>
    </>
  );
  return (
    <>
      <div className={classes.orderDetailsContainer}>
        <Card>
          {loading && <p style={{ textAlign: "center" }}>Loading...</p>}
          {!loading && orderDetailContent}
        </Card>
      </div>
    </>
  );
};

export default OrderDetails;
