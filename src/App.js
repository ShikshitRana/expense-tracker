import React, { useState } from "react";
import Header from "./Components/UI/Header";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";

function App() {
  const [expenses, setExpenses] = useState([]);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  const deleteExpenses = (ide) => {
    setExpenses((prevExpenses) => {
      return prevExpenses.filter((item) => item.id !== ide);
    });
  };

  return (
    <div>
      <Header />
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} deleteExpense={deleteExpenses} />
    </div>
  );
}

export default App;
