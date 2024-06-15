import { useMemo, useState } from "react";
import { Transaction } from "../lib/types";

export default function useManageTransactions() {
  const [transactions, setTransactions] = useState<Array<Transaction>>([]);

  const expenses = useMemo(
    () => transactions.filter((tx) => tx.type == "EXPENSE"),
    [transactions]
  );

  const income = useMemo(
    () => transactions.filter((tx) => tx.type == "INCOME"),
    [transactions]
  );

  function addTransaction(item: Transaction): void {
    setTransactions([...transactions, item]);
  }

  function deleteTransaction(id: number): void {
    setTransactions(() =>
      [...transactions].filter((item) => item.amount !== id)
    );
  }

  return {
    income,
    expenses,
    transactions,
    addTransaction,
    deleteTransaction,
  };
}
