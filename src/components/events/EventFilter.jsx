import { useState } from "react";

const filters = [
  "All",
  "For you",
  "Online",
  "Today",
  "This weekend",
  "Free",
];

export default function EventFilterTabs() {
  const [active, setActive] = useState("All");

  return (
    <div className="w-full px-6">
    <div className="flex gap-6
          overflow-x-auto
          whitespace-nowrap
          scrollbar-hide
          text-sm sm:text-base lg:text-xl
          pt-3 mt-4 lg:ml-8 text-gray-800 font-medium">
      {filters.map((filter, i) => (
        <button
          key={i}
          onClick={() => setActive(filter)}
          className={`pb-1 border-b-2 cursor-pointer ${
            active === filter
              ? "border-purple-800 text-purple-800 font-medium"
              : "border-transparent hover:text-purple-800"
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
    </div> 
  );
}
