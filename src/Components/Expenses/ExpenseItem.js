import React from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const dlt = () => {
    const ide = props.id;
    props.deleteExpense(ide);
  };
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate className="expense-item__date" date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item_div">
            <div className="expense-item__price">₹{props.amount}</div>
            <button onClick={dlt} className="delete-btn">
              X
            </button>
          </div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
