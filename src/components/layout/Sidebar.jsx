import { Home, Calendar, ReceiptText, Megaphone, Landmark, MessageCircleWarning, Settings, ShoppingCart} from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {

    const iconClass = "text-gray-800 hover:text-purple-500 transition-colors duration-200";

    // Sidebar items array for easier management
  const sidebarItems = [
    { name: "Home", icon: Home, path: "/dashboard" },
    { name: "Events", icon: Calendar, path: "/organizer/events" },
    { name: "Tickets", icon: ReceiptText, path: "/organizer/tickets" },
    { name: "Marketing", icon: Megaphone, path: "/marketing" },
    { name: "Finance", icon: Landmark, path: "/finance" },
    { name: "Reporting", icon: MessageCircleWarning, path: "/reporting" },
    { name: "Organizer Settings", icon: Settings, path: "/organization-settings" },
    { name: "Orders", icon: ShoppingCart, path: "/orders" },
  ];
  return (
    <aside className="w-20 bg-gray-100 border-r flex flex-col items-center py-6 space-y-10">
       {sidebarItems.map((item) => {
        const Icon = item.icon;
        return (
          <NavLink
            key={item.name}
            to={item.path}
            title={item.name} // Tooltip on hover
            className={({ isActive }) =>
              `p-2 rounded flex justify-center items-center ${
                isActive ? "bg-purple-100 text-purple-600" : iconClass
              }`
            }
          >
            <Icon size={32} />
          </NavLink>
        );
      })}
    </aside>
  );
}
