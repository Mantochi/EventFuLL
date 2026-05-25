import { Home, Calendar, Megaphone, ReceiptText, Landmark } from "lucide-react";
import { useState } from "react";

export default function MobileSidebar() {
  const [active, setActive] = useState("home");

  const buttons = [
    { id: "home", icon: <Home />, label: "Home" },
    { id: "events", icon: <Calendar />, label: "Events" },
    { id: "likes", icon: <Megaphone />, label: "marketing" },
    { id: "tickets", icon: <ReceiptText />, label: "Tickets" },
    { id: "profile", icon: <Landmark />, label: "finance" },
  ];

  return (
    <div className="lg:hidden fixed bottom-0 left-0 w-full z-50 border-t bg-white shadow-md">
      <nav className="flex justify-around items-center h-20 relative">
        {buttons.map((btn) => (
          <button
            key={btn.id}
            className="flex flex-col items-center text-sm transition-colors duration-200 relative"
            onClick={() => setActive(btn.id)}
          >
            <div
              className={`transition-colors duration-200 ${
                active === btn.id ? "text-purple-600" : "text-gray-500 hover:text-purple-500"
              }`}
            >
              {btn.icon}
            </div>
            <span
              className={`text-xs transition-colors duration-200 ${
                active === btn.id ? "text-purple-600" : "text-gray-500"
              }`}
            >
              {btn.label}
            </span>

            {/* Animated underline */}
            {active === btn.id && (
              <span className="absolute -bottom-1 w-6 h-1 bg-purple-600 rounded-full transition-all duration-300"></span>
            )}
          </button>
        ))}
      </nav>
    </div>
  );
}