import { useState } from "react";

import Header from "./components/Header";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([]);

  // Add expense
  const addExpense = (expense) => {
    setExpenses((previousExpenses) => [
      ...previousExpenses,
      expense
    ]);
  };

  // Delete expense
  const deleteExpense = (id) => {
    setExpenses((previousExpenses) =>
      previousExpenses.filter(
        (expense) => expense.id !== id
      )
    );
  };

  // Calculate total expenses
  const totalExpense = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  return (
    <div className="app">
      <Header />

      <ExpenseForm addExpense={addExpense} />

      <ExpenseList
        expenses={expenses}
        deleteExpense={deleteExpense}
        totalExpense={totalExpense}
      />
    </div>
  );
}

export default App;