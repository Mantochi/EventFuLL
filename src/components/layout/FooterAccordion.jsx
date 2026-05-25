import { useId } from "react";
import { FaChevronDown } from "react-icons/fa6";

export default function FooterAccordion({ title, items, sectionKey, open, onToggle }) {
  const contentId = useId();
  const isOpen = open === sectionKey;

  return (
    <div className="w-full">
      {/* Accessible heading + button */}
      <h4 className="text-white font-bold mb-4">
        <button
          type="button"
          onClick={() => onToggle(sectionKey)}
          aria-expanded={isOpen}
          aria-controls={contentId}
          className="w-full flex md:block justify-between text-left md:cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
        >
          <span>{title}</span>

          {/* Mobile-only indicator */}
           {/* Chevron icon (mobile only) */}
          <FaChevronDown
            aria-hidden="true"
            className={`
              md:hidden
              transition-transform duration-300 ease-in-out
              ${isOpen ? "rotate-180" : "rotate-0"}
            `}
          />
        </button>
      </h4>

      {/* List */}
      <ul
        id={contentId}
        role="list"
        className={`
          space-y-2 text-base text-left overflow-hidden transition-[max-height] duration-300 ease-in-out
          ${isOpen ? "max-h-96" : "max-h-0"}
          md:max-h-full
        `}
      >
        {items.map((item, index) => (
          <li key={index}>
            <a
              href={item.href}
              className="hover:underline hover:text-purple-600 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 rounded"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
