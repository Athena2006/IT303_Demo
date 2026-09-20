import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm({ addExpense }) {
  const [category, setCategory] = useState("Food");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description === "" || amount === "") {
      alert("Please enter the description and amount.");
      return;
    }

    const newExpense = {
      id: Date.now(),
      category: category,
      description: description,
      amount: Number(amount)
    };

    addExpense(newExpense);

    // Clear input
    setDescription("");
    setAmount("");
  };

  return (
    <div className="form-container">
      <h2>Add Today's Expense</h2>

      <form onSubmit={handleSubmit}>
        <label>Category</label>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>Food</option>
          <option>Transportation</option>
          <option>School</option>
          <option>Load / Internet</option>
          <option>Shopping</option>
          <option>Other</option>
        </select>

        <label>Description</label>

        <input
          type="text"
          placeholder="Example: Breakfast"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label>Amount</label>

        <input
          type="number"
          placeholder="Example: 80"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          min="0"
        />

        <button type="submit">
          Add Expense
        </button>
      </form>
    </div>
  );
}

export default ExpenseForm;