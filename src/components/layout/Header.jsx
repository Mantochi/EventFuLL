import { AnimatePresence } from "framer-motion";
import { FaSearch, FaUserCircle, FaMapMarkerAlt,  FaChevronDown, } from "react-icons/fa";
import { Plus, Heart, ReceiptText } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import DropdownItem from "./DropdownItem";


export default function Header() {

    const [menuOpen, setMenuOpen] = useState(false);
    const dropdownRef = useRef(null);


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


     return (

   
    <header className="w-full fixed top-0 z-50 shadow-md backdrop-blur">

        <nav
            aria-label="Main Navigation"
            className="lg:space-x-10 px-6 py-3 lg:px-10">
                {/* Top Row on all screens */}

           <div className="flex items-center justify-between">       
            
                  {/* Logo on the left */}    
                <h1 className="text-3xl font-serif text-black">Event<span className="text-pink-500 font-bold">FuLL</span></h1>


                
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
                                

                          
            </nav>
    </header>
  );
}
