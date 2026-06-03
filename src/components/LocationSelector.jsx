import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";

export default function LocationSelector() {
  const [location, setLocation] = useState("Abuja");
  const [showDropdown, setShowDropdown] = useState(false);
  const locations = ["Abuja", "Lagos", "Kano", "Port Harcourt"];

  return (
    <div className="w-full bg-white shadow-md">
    <div className="flex items-center gap-2 text-gray-800 text-2xl h-[90px] ml-7 lg:px-6">
      <span>Browsing events in</span>
      <div className="relative">
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="flex items-center gap-1 text-purple-600 hover:underline text-2xl"
        >
            <FaChevronDown className="text-2xl mt-[2px]" />
          {location}
          
        </button>
        {showDropdown && (
          <ul className="absolute mt-2 w-40 bg-white shadow rounded text-left text-gray-700 z-10">
            {locations.map((loc, i) => (
              <li
                key={i}
                onClick={() => {
                  setLocation(loc);
                  setShowDropdown(false);
                }}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                {loc}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
    </div>
  );
}



