import { Home, ScanSearch, ReceiptText, UserRound, BadgePlus } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function MobileSidebar() {
  const [active, setActive] = useState("home");

  const buttons = [
    { 
      id: "events", 
      icon: <ScanSearch size={30}/>,
       label: "Explore", 
       path: "/events"
     },
    { 
      id: "likes",
       icon: <BadgePlus size={30}/>, 
       label: "create", 
       path: "/dashboard"
       },
    {
       id: "home", 
       icon: <Home size={35} className="absolute left-1/2 -translate-x-1/2 -top-5"/>, 
       label: "Home", 
       path: "/" 
      },
    { 
      id: "tickets",
       icon: <ReceiptText size={30}/>,
        label: "Tickets", 
        path: "/ticket"
       },
    { 
      id: "profile", 
      icon: <UserRound size={30}/>, 
      label: "Profile", 
      path: "/profile" 
    },
  ];

  return (
    <div className="lg:hidden fixed bottom-3 left-0 w-full z-50 shadow-md">
      <nav className="flex justify-around items-center h-20 relative rounded-3xl bg-black/10 backdrop-blur-xl border border-white/20 shadow-xl">
        {buttons.map((btn) => (
          <NavLink
            key={btn.id}
            to={btn.path}
            className="flex flex-col items-center text-lg transition-all duration-300 relative"
            onClick={() => setActive(btn.id)}
          >
            <div
              className={`transition-all duration-300 ${
                active === btn.id ? "text-purple-600 scale-110" : "text-gray-600 hover:text-purple-500"
              }`}
            >
              {btn.icon}
            </div>
            <span
              className={`text-base mt-1 transition-colors duration-200 ${
                active === btn.id ? "text-purple-600 font-medium" : "text-white/80"
              }`}
            >
              {btn.label}
            </span>

            {/* Animated underline */}
            {active === btn.id && (
              <span className="absolute -bottom-1 w-10 h-1 bg-purple-600 rounded-full transition-all duration-300"></span>
            )}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}