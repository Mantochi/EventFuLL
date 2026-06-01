import { AnimatePresence } from "framer-motion";
import { FaSearch, FaUserCircle, FaMapMarkerAlt,  FaChevronDown, } from "react-icons/fa";
import { Plus, Heart, ReceiptText } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import DropdownItem from "./DropdownItem";


export default function Header() {

    const [menuOpen, setMenuOpen] = useState(false);
    const dropdownRef = useRef(null);

    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);


// Close dropdown on outside click
useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
  if (searchQuery.length < 2) return; // wait until user types at least 2 chars

  const timeout = setTimeout(async () => {
    try {
      const res = await fetch(`/core/search/?q=${searchQuery}`);
      const data = await res.json();
      setSearchResults(data);
    } catch (err) {
      console.error(err);
    }
  }, 300); // 300ms debounce

  return () => clearTimeout(timeout);
}, [searchQuery]);



     return (

   
    <header className="w-full fixed top-0 z-50 bg-white shadow-md backdrop-blur">

        <nav
            aria-label="Main Navigation"
            className="lg:space-x-10 px-6 py-3 lg:px-10">
                {/* Top Row on all screens */}

           <div className="flex items-center justify-between">       
            
                  {/* Logo on the left */}    
                <h1 className="text-3xl font-bold text-purple-700">EventFuLL</h1>


                
                                           {/* Icons on the right */}
                      <div className="flex gap-10 text-sm text-gray-700 font-medium items-center">
                             <div className="flex flex-col items-center cursor-pointer">
                                  <Plus className="hidden md:inline text-2xl" />
                                  <span className="hidden md:inline hover:underline hover:text-purple-600">Create an event</span>
                             </div>
                             <div className="flex flex-col items-center cursor-pointer">
                                  <ReceiptText className="hidden md:inline text-2xl" />
                                  <span className="hidden md:inline hover:underline hover:text-purple-600">Tickets</span>
                             </div>
                             <div className="flex flex-col items-center cursor-pointer">
                                  <ReceiptText className="hidden md:inline text-2xl"/>
                                  <span className="hidden md:inline hover:underline hover:text-purple-600">Notify</span>
                             </div>
                             <div
                                ref={dropdownRef}
                                onMouseEnter={() => setMenuOpen(true)}
                                onMouseLeave={() => setMenuOpen(false)}
                                className="relative flex flex-col items-center cursor-pointer">
                            <button
                                  type="button"
                                  aria-haspopup="menu"
                                  aria-expanded={menuOpen}
                                  onClick={() => setMenuOpen(prev => !prev)}
                                  className="flex items-center space-x-1 focus:outline-none">
                                    <FaUserCircle className="text-3xl" />
                                    <FaChevronDown
                                     className={`transition-transform duration-200 ${
                                       menuOpen ? "rotate-180" : ""
                                        }`} />
                            </button>

                             {/* Mobile dropdown */}
                            <AnimatePresence>
                             {menuOpen && (
                             <motion.ul
                               key="mobile-menu"
                               initial={{ opacity: 0, y: -10 }}
                               animate={{ opacity: 1, y: 0 }}
                               exit={{ opacity: 0, y: -10 }}
                               transition={{ duration: 0.15 }}
                               className="absolute right-0 top-full mt-3 w-64 rounded-xl bg-white shadow-xl py-3 text-base border border-gray-400 font-medium">
                                <DropdownItem label="Browse Events" />

                                <DropdownItem  label="Manage my Events" to="/dashboard" />

                                <DropdownItem  label="Help Center" />
                                <DropdownItem  label="Tickets" />
                                <DropdownItem  label="Liked" />
                                <DropdownItem  label="Interests" />
                                <DropdownItem  label="Account Settings" />
                                <DropdownItem  label="Logout" />
                              </motion.ul>
                              )}
                             </AnimatePresence>
                                <span className="hidden md:inline hover:underline hover:text-purple-600">tochimike5@gmail.com</span>
           
                             </div>
                      </div>
           </div>
                                        {/* Search + Location Bar (Centered on large screens) */} 
                            <div className="mt-4 lg:mt-0 lg:top-2 lg:absolute lg:left-1/2 lg:-translate-x-[90%] lg:w-[500px]">

                                        {/* Search  */} 
                              <div className="flex items-center gap-2 rounded-full border border-gray-300 px-4 py-4 shadow-sm">
                                      <FaSearch className="text-purple-600 text-2xl" />
                                      <input
  
                                        type="text"
                                        placeholder="Search events"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full outline-none text-base font-medium text-gray-900 placeholder-gray-500 bg-transparent"
                                       />

                              </div>
                            {/* Autocomplete */}
                        {searchResults.length > 0 && (
                     <ul className="absolute top-full left-0 right-0 max-h-60 bg-white/70 shadow-md rounded-xl mt-2 backdrop-blur-lg border border-white/40  z-[100]">
                      {searchResults.map((event, idx) => (
                     <li
                        key={idx}
                        className="px-4 py-2 text-sm hover:bg-white-50 cursor-pointer transition"
                        onClick={() => {
                        setSearchQuery(`${event.title} - ${event.city}`);
                         setSearchResults([]);
                       }}>
                   <strong>{event.title}</strong> - {event.city}, {event.state} ({event.category})
                    </li>
                    ))}
                 </ul>
                )}
               </div>

                          
            </nav>
    </header>
  );
}
