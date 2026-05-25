export default function TicketCard({ ticket }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h3 className="font-bold">{ticket.event_title}</h3>
      <p>{ticket.quantity} ticket(s)</p>
      <p>Status: {ticket.is_paid ? "Paid" : "Pending"}</p>

      {ticket.qr_code && (
        <img src={ticket.qr_code} alt="QR" className="w-32 mt-4" />
      )}
    </div>
  );
}
