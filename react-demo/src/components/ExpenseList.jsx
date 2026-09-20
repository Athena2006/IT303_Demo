import "./ExpenseList.css";

function ExpenseList({ expenses, deleteExpense, totalExpense }) {
  return (
    <div className="expense-container">
      <h2>Today's Expenses</h2>

      {expenses.length === 0 ? (
        <p className="empty">
          No expenses added yet.
        </p>
      ) : (
        <div>
          {expenses.map((expense) => (
            <div className="expense-item" key={expense.id}>
              <div>
                <h3>{expense.description}</h3>

                <p>
                  Category: {expense.category}
                </p>

                <p>
                  Amount: ₱{expense.amount.toFixed(2)}
                </p>
              </div>

              <button
                className="delete-button"
                onClick={() => deleteExpense(expense.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="total">
        <h2>
          Total Expenses: ₱{totalExpense.toFixed(2)}
        </h2>

        <p>
          Number of expenses: {expenses.length}
        </p>
      </div>
    </div>
  );
}

export default ExpenseList;