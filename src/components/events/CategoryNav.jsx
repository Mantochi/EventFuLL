import { Mic, Music, Wine, Sparkles, Paintbrush, Church, Gamepad2, Briefcase, Volleyball, Laptop2Icon, LayoutGrid } from 'lucide-react';



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
    { name: "more", icon: LayoutGrid  },
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

    <div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
    >     
    <div className="w-full bg-white">      
    <section className="py-10 max-w-8xl px-4">

       <div className="flex items-center justify-between mb-8">
          <h3 className="text-3xl text-black font-semibold">
            Browse by Category
          </h3>
        </div>
   
    
    <div className='overflow-hidden'></div>
    <div className="flex gap-3 md:gap-9 animate-marquee md:animate-none" >
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
                rounded-3xl mb-3 border border-purple-300
                group-hover:text-purple-500  group-hover:border-purple-500
                hover:scale-105 transition-all duration-200
                ${isActive 
                  ? "bg-purple-200 border-purple-500 text-purple-500" 
                  : "bg-gray-100 border-purple-100 text-gray-500"}`}>

                <Icon className='w-7 h-7 md:w-12 md:h-12' />
      </div>
              <p className="text-sm font-medium text-gray-700">{cat.name}</p>
      </div>
          );
        })}
    </div>
    </section>
    </div>
    </div> 
  );
}

    
    
  


