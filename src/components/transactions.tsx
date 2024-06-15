import { Transaction } from "../lib/types";

export default function Transactions({
  transactions,
  title,
}: {
  transactions: Transaction[];
  title: string;
}) {
  return (
    <div className="transactions">
      <h3>{title}</h3>
      <div>
        Total: {transactions.reduce((acc, item) => acc + item.amount, 0)}
      </div>
      <div>
        {transactions.map((tx, id) => (
          <TransactionItem key={id} transaction={tx} />
        ))}
      </div>
    </div>
  );
}

function TransactionItem({ transaction }: { transaction: Transaction }) {
  return (
    <div className="transaction">
      {/* <div>Type: {transaction.type}</div> */}
      <div>Amount: {transaction.amount}</div>
    </div>
  );
}
