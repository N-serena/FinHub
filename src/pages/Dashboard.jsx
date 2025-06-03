import AccountsList from "../components/AccountsList";
import SpendingChart from "../components/SpendingChart";
import TransactionsTable from "../components/TransactionsTable";


// src/pages/Dashboard.jsx
// This is the main dashboard page that aggregates all components
// like accounts list, spending chart, and transactions table.
// It serves as the central hub for users to view their financial data.

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 space-y-8">
      <header className="text-2xl font-bold">Dashboard</header>
      <AccountsList />
      <SpendingChart />
      <TransactionsTable />
    </div>
  );
}