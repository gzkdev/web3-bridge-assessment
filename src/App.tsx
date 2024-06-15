import { useState } from "react";
import "./App.css";
import Transactions from "./components/transactions";
import useManageExpenses from "./hooks/useManageExpenses";
import { Transaction, TransactionType } from "./lib/types";

function App() {
  const { income, expenses, addTransaction } = useManageExpenses();

  const [transactionType, setTransactionType] =
    useState<TransactionType>("INCOME");

  const [transactionAmount, setTransactionAmount] = useState(0);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const draft: Transaction = {
      amount: transactionAmount,
      type: transactionType,
    };

    setTransactionType("INCOME");
    setTransactionAmount(0);

    addTransaction(draft);
  }

  return (
    <>
      <h1>The Personal Finance</h1>
      <form className="form" onSubmit={handleSubmit}>
        <select
          name="type"
          id="type"
          onChange={(e) => {
            setTransactionType(e.target.value as TransactionType);
          }}
        >
          <option value="INCOME">INCOME</option>
          <option value="EXPENSE">EXPENSE</option>
        </select>
        <input
          type="number"
          inputMode="decimal"
          min={0}
          onChange={(e) => {
            setTransactionAmount(+e.target.value);
          }}
        />
        <button>Add Transation</button>
      </form>

      <div className="transactions-grid">
        <Transactions transactions={income} title="Income" />
        <Transactions transactions={expenses} title="Expenses" />
      </div>
    </>
  );
}

export default App;
