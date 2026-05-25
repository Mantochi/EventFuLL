export default function TransactionTable({ transactions }) {
  return (
    <table className="w-full bg-white rounded-xl shadow mt-6">
      <thead>
        <tr className="border-b">
          <th className="p-4">Type</th>
          <th>Description</th>
          <th>Amount</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(tx => (
          <tr key={tx.id} className="border-b">
            <td className="p-4">{tx.type}</td>
            <td>{tx.description}</td>
            <td>₦{tx.amount}</td>
            <td>{new Date(tx.created_at).toLocaleDateString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
