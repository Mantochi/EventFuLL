import { useEffect, useState } from "react";
import api from "../services/api";
import DashboardLayout from "../components/layout/DashboardLayout";
import TicketCard from "../components/tickets/TicketCard";

export default function Tickets() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    api.get("tickets/my/").then(res => setTickets(res.data));
  }, []);

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-6">My Tickets</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {tickets.map(ticket => (
          <TicketCard key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </DashboardLayout>
  );
}
