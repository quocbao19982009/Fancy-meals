import React from "react";
import classes from "./ItemsTable.module.css";
const ItemsTable = (props) => {
  return (
    <div className={classes.table}>
      <table>
        <tr>
          <th>Name</th>
          <th>Amount</th>
          <th>Price</th>
        </tr>
        {props.items.map((item) => (
          <tr>
            <td>{item.name}</td>
            <td>{item.amount}</td>
            <td>$ {item.price}</td>
          </tr>
        ))}
        <tr>
          <td>Total:</td>
          <td> </td>
          <td>$ {props.total}</td>
        </tr>
      </table>
    </div>
  );
};

export default ItemsTable;
