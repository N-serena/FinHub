// This component displays a list of accounts with their names and balances.

const mockAccounts = [
  { id: 1, name: "Chase Checking", balance: "$1,204.32" },
  { id: 2, name: "Amex Savings", balance: "$3,822.91" }
];

export default function AccountsList() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Accounts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {mockAccounts.map((acc) => (
          <div key={acc.id} className="p-4 bg-white rounded-xl shadow">
            <div className="text-lg font-medium">{acc.name}</div>
            <div className="text-gray-600">Balance: {acc.balance}</div>
          </div>
        ))}
      </div>
    </div>
  );
}