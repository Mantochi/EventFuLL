import { Mic, Music, Wine, Sparkles, Paintbrush, Church, Gamepad2, Briefcase, Volleyball, Laptop2Icon } from 'lucide-react';

const categories = [
  { name: "Music", icon: Music  },
  { name: "Nightlife", icon: Sparkles  },
  { name: "Arts", icon: Paintbrush  },
  { name: "CodeAbuja", icon: Laptop2Icon  },
  { name: "Worship", icon: Church  },
  { name: "Hobbies", icon: Gamepad2  },
  { name: "Business", icon: Briefcase  },
  { name: "Food & Drink", icon: Wine  },
   { name: "Sport", icon: Volleyball  },
    { name: "Concert", icon: Mic  },
];
// src/components/CategoryNav.jsx

const containerVariants = {
      hidden: { x: -100, boxShadow: "0 0 0 rgba(0, 0, 0, 0)" },
      visible: { 
      x: 0, 
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" // Equivalent to shadow-md
  }
};


export default function CategoryNav({ filter, setFilter }) {
  return (

    <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
    >     
    <div className="hidden md:block w-full bg-white">      
    <section className="py-10 max-w-8xl px-4">

       <div className="flex items-center justify-between mb-8">
          <h3 className="text-3xl text-black font-semibold">
            Browse by Category
          </h3>

          <button className="text-purple-400 text-sm">
            View all
          </button>
        </div>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 xl:grid-cols-10 gap-5">
          {categories.map((cat) => {
          const Icon = cat.icon;
          const isActive = filter === cat.name;

          return (
      <div
          key={cat.name}
          onClick={() => setFilter(cat.name)}
          className={`group flex flex-col items-center p-5 bg-white
              hover:border-purple-500 transition-all duration-200 
              cursor-pointer hover:scale-105
              ${ isActive
                ? "bg-purple-100 border-purple-600"
                : "bg-white border-gray-200 text-gray-500"
            }`}>

      <div className={`bg-purple-100 text-gray-500 p-4
                rounded-full mb-3 border border-purple-300
                group-hover:text-purple-500  group-hover:border-purple-500
                hover:scale-105 transition-all duration-200
                ${isActive 
                  ? "bg-purple-200 border-purple-500 text-purple-500" 
                  : "bg-gray-100 border-purple-100 text-gray-500"}`}>

                <Icon size={50} />
      </div>
              <p className="text-sm font-medium text-gray-700">{cat.name}</p>
      </div>
          );
        })}
    </div>
    </section>
    </div>
    

    {/* ================= FEATURED SECTION ================= */}
      <section className="relative z-10 mt-10">
        <div className="grid lg:grid-cols-4 gap-6 px-6 lg:px-10">
          {/* Left Banner */}
          <div className="relative rounded-3xl overflow-hidden border border-white/10 h-[450px] w-full lg:col-span-3 ">
            <img
              src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=1200&auto=format&fit=crop"
              alt=""
              className="absolute w-full h-full object-cover row-span-3"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />

            <div className="relative z-10 p-10 h-full flex flex-col justify-between">
              <div>
                <span className="bg-purple-500/20 border border-purple-500/30 text-purple-300 text-xs px-4 py-2 rounded-full">
                  FEATURED EVENT
                </span>

                <h3 className="text-5xl font-bold mt-8">
                  Global Music
                  <br />
                  Festival 2025
                </h3>

                <p className="text-white/70 mt-6 max-w-lg leading-8">
                  Experience 3 days of incredible music, top artists and unforgettable moments.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 items-center">
                <button className="h-14 px-8 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 font-medium">
                  Get Tickets
                </button>

                <button className="h-14 px-8 rounded-2xl border border-white/20 bg-white/5">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          
          
           {/* Organizers */}
          <div className="relative bg-white/5 border border-black/30 rounded-3xl p-5">
            <div className="flex items-center justify-between">
              <h4 className="text-2xl font-semibold text-black">
                Top Organizers
              </h4>

              <button className="text-purple-400 text-lg">
                View all
              </button>
            </div>

            <div className="mt-4 space-y-1">
              {[
                "Live Nation",
                "Tech Events NYC",
                "Creative Mornings",
                "Run Collective",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-white/5 border border-white/10 rounded-2xl p-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500" />

                    <div className='text-left'>
                      <h5 className=" text-xl text-black">{item}</h5>

                      <p className="text-black/50 text-sm">
                        12.4K followers
                      </p>
                    </div>
                  </div>

                  <button className="h-10 px-5 rounded-full border border-purple-500/40 text-purple-300 text-sm">
                    Follow
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </motion.div> 
  );
}

    
    
  


