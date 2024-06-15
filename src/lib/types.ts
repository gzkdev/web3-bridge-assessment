export type TransactionType = "INCOME" | "EXPENSE";

export type Transaction = {
  type: TransactionType;
  amount: number;
};
