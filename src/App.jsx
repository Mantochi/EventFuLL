import { Routes, Route } from "react-router-dom";
import Home from "@/pages/homepage/Home";
import Dashboard from "@/pages/dashboardpage/Dashboard";
import EventListing from "@/pages/eventpages/EventListing";
import Ticket from "@/pages/ticketpage/Ticket";
import Profile from "@/pages/profilepage/Profile";
import './App.css';




function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/event" element={<EventListing />} />
        <Route path="/ticket" element={<Ticket />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
  );
}





export default App;