//This component displays a table of transactions.

const mockTxns = [
  { id: 1, date: "2025-06-01", name: "Starbucks", amount: "-$4.50" },
  { id: 2, date: "2025-06-02", name: "Amazon", amount: "-$82.13" },
  { id: 3, date: "2025-06-03", name: "Paycheck", amount: "+$2,500.00" },
];

export default function TransactionsTable() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Recent Transactions</h2>
      <div className="overflow-x-auto bg-white rounded-xl shadow">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">Date</th>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-right">Amount</th>
            </tr>
          </thead>
          <tbody>
            {mockTxns.map((txn) => (
              <tr key={txn.id} className="border-t">
                <td className="px-4 py-2">{txn.date}</td>
                <td className="px-4 py-2">{txn.name}</td>
                <td className="px-4 py-2 text-right">{txn.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
