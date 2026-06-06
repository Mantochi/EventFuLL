// src/components/EventHero.jsx
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";

import {
  Search,
  MapPin,
  Calendar,
  Heart,
  ChevronDown,
} from "lucide-react";


export default function EventHero() {

  const [searchQuery, setSearchQuery] = useState("");
      const [searchResults, setSearchResults] = useState([]);


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
    <div className="relative rounded-b-3xl bg-gradient-to-r from-indigo-700 to-pink-700">
    
    {/* ================= HERO ================= */}
     
      <section className="relative z-10 max-w-7xl mx-auto lg:px-10 pt-16 pb-16 ">

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          {/* Left */}
          <div>
            <h2 className="text-black text-4xl lg:text-7xl font-bold leading-tight">
              Discover Events
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-serif">
                 Around You
              </span>
            </h2>

            <p className="text-white/60 text-xl leading-8 mt-8 max-w-2xl hidden md:block">
              Find concerts, conferences, workshops, sports, meetups & more. <br />
              Unforgettable experiences start here.
            </p>

               {/* Search + Location Bar (Centered on large screens) */} 
                    <div className="md:hidden -bottom-6 -translate-x-1/2  absolute w-full left-1/2 px-10">
            
                               {/* Search  */} 
                      <div className="w-full flex items-center gap-2 rounded-3xl border border-gray-400 px-3 py-4 shadow-sm bg-white">
                           <FaSearch className="text-purple-600 text-2xl" />
                                  
                                  <input
                                    type="text"
                                     placeholder="Search events, concerts, places..."
                                     value={searchQuery}
                                       onChange={(e) => setSearchQuery(e.target.value)}
                                         className="w-full px-2 outline-none text-base font-medium text-gray-900 placeholder-gray-500 bg-transparent"
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

            {/* Search Bar */}
          <div className="hidden md:block">

            <div className="mt-10 bg-[#120423]/90 border border-white/10 rounded-2xl p-3 flex flex-col lg:flex-row gap-3">
              <div className="flex-1 flex items-center gap-3 px-4 h-14 bg-white/5 rounded-xl">
                <Search size={18} className="text-white/40" />

                <input
                  type="text"
                  placeholder="Search events, artists or places"
                  className="bg-transparent flex-1 outline-none text-sm placeholder:text-white/40"
                />
              </div>

              <button className="h-14 px-5 bg-white/5 rounded-xl flex items-center gap-2 text-sm">
                <MapPin size={16} />
                New York, USA
                <ChevronDown size={16} />
              </button>

              <button className="h-14 px-5 bg-white/5 rounded-xl flex items-center gap-2 text-sm">
                <Calendar size={16} />
                Any date
                <ChevronDown size={16} />
              </button>

              <button className="w-14 h-14 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <Search size={20} />
              </button>
            </div>
            

            {/* Tags */}

            
            <div className="flex flex-wrap gap-3 mt-8">
              {[
                "Music",
                "Tech",
                "Art & Culture",
                "Business",
                "Sports",
                "More",
              ].map((tag) => (
                <button
                  key={tag}
                  className="px-5 h-11 rounded-full bg-white/5 border border-white/10 text-sm text-white/70 hover:bg-purple-500/20 transition"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
          </div>

          {/* Right Hero Cards */}
       <div className="hidden lg:block">

          <div className=" grid grid-cols-[1fr_220px] gap-5">
            {/* Big Card */}
            <div className="relative rounded-3xl overflow-hidden border border-white/10 min-h-[420px]">
              <img
                src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1200&auto=format&fit=crop"
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              <button className="absolute top-5 right-5 w-10 h-10 rounded-full bg-black/40 backdrop-blur-xl flex items-center justify-center">
                <Heart size={18} />
              </button>

              <div className="absolute bottom-0 p-7">
                <h3 className="text-3xl font-semibold">
                  Summer Beats
                  <br />
                  Music Festival
                </h3>

                <p className="text-white/70 mt-4">Aug 24 • New York</p>

                <p className="mt-2 text-lg font-medium">From $49</p>
              </div>
            </div>

            {/* Side Cards */}
            <div className="space-y-5">
              {[
                 {
                  title: "Product Design Workshop",
                  image:
                    "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
                },
                {
                  title: "Modern Art Exhibition",
                  image:
                    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="relative rounded-2xl overflow-hidden border border-white/10 h-[200px]"
                >
                  <img
                    src={item.image}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                  <button className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur-xl flex items-center justify-center">
                    <Heart size={16} />
                  </button>

                  <div className="absolute bottom-0 p-5">
                    <h4 className="font-semibold leading-6">
                      {item.title}
                    </h4>

                    <p className="text-white/70 text-sm mt-2">
                      From $29
                    </p>
                  </div>
                </div>
              ))}
            </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
