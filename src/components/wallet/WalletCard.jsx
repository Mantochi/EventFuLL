export default function WalletCard({ balance }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <p className="text-gray-500">Wallet Balance</p>
      <h2 className="text-3xl font-bold text-green-600">₦{balance}</h2>
      <button className="mt-4 bg-black text-white px-4 py-2 rounded">
        Withdraw
      </button>
    </div>
  );
}
