import { useEffect, useState } from "react";
import api from "../services/api";
import DashboardLayout from "../components/layout/DashboardLayout";
import WalletCard from "../components/wallet/WalletCard";
import TransactionTable from "../components/wallet/TransactionTable";

export default function Wallet() {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    api.get("wallet/balance/").then(res => setBalance(res.data.wallet_balance));
    api.get("wallet/transactions/").then(res => setTransactions(res.data));
  }, []);

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-6">Wallet</h1>
      <WalletCard balance={balance} />
      <TransactionTable transactions={transactions} />
    </DashboardLayout>
  );
}
