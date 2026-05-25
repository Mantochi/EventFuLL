import { useEffect, useRef, useState } from "react";
import DropdownItem from "./DropdownItem";
import { FaUserCircle, FaChevronDown } from "react-icons/fa";
import { ArrowLeftRight, BadgeInfo, LogOut } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";


export default function DashboardHeader() {

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

    <motion.div
              initial={{ x: -100 }}
              animate={{ x: 0 }} 
          >
    <header className="w-full fixed top-0 z-50 bg-white shadow-md backdrop-blur">

        <nav
            aria-label="Main Navigation"
            className="w-full flex flex-wrap items-center lg:space-x-10 px-10 py-3 lg:px-15">
                {/* Top Row on all screens */}

           <div className="order-1 lg:order-1 flex items-center">       
            
                  {/* Logo on the left */}    
                <h1 className="text-3xl font-bold text-purple-700">EventHub</h1>
           </div> 

           <div className="order-2 lg:order-3 flex ml-auto gap-x-15 text-sm text-gray-700 font-medium items-center">
                             c

                             <div
                                ref={dropdownRef}
                                 onMouseEnter={() => setMenuOpen(true)}
                                onMouseLeave={() => setMenuOpen(false)}
                                className="flex flex-col items-center cursor-pointer">
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
                               className="absolute right-0 top-full mt-2 w-48 rounded-lg bg-white shadow-lg py-2 text-sm text-gray-700 font-medium">
                                <DropdownItem icon={ArrowLeftRight}  label="Switch to Homepage" to='/' />
                                <DropdownItem icon={BadgeInfo} label="Help Center" />
                                <DropdownItem icon={FaUserCircle} label="Account Settings" />
                                <DropdownItem icon={LogOut} label="Logout" />
                              </motion.ul>
                              )}
                             </AnimatePresence>
                                <span className="hidden md:inline hover:underline hover:text-purple-600">tochimike5@gmail.com</span>
           
                             </div>
                      </div>
            </nav>
    </header>
    </motion.div>
   );
}  