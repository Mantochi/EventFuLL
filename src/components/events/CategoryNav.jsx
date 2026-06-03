import { Mic, Music, Wine, Sparkles, Paintbrush, Church, Gamepad2, Briefcase, Volleyball, Laptop2Icon, LayoutGrid } from 'lucide-react';
import { NavLink } from 'react-router-dom';



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





 function CategoryItem({ cat, filter }) {
  const Icon = cat.icon;
  const isActive = filter === cat.name;


  return (

    <NavLink
          to={`/events?category=${cat.name}`}
          className={`group flex flex-col items-center p-5 bg-white
                    transition-all duration-200 
              cursor-pointer hover:scale-105
              ${ isActive
                ? "bg-purple-100 border-purple-600"
                : "bg-white border-gray-200 text-gray-500"
            }`}>

      <div className={`text-gray-500 p-4
                rounded-3xl mb-3 border
                group-hover:text-purple-500  group-hover:border-purple-500
                hover:scale-105 transition-all duration-200
                ${isActive 
                  ? "bg-purple-200 border-purple-500 text-purple-500" 
                  : "bg-gray-100 border-purple-100 text-gray-500"}`}>

                <Icon className='w-8 h-8 md:w-12 md:h-12' />
      </div>
              <p className="text-sm font-medium text-gray-700 whitespace-nowrap">{cat.name}</p>
      </NavLink>
          );
        }

        export default function CategoryNav({ filter, setFilter }) {

          return (
            <div className="w-full bg-white">      
             <section className="py-10 max-w-8xl px-4">

           <div className="flex items-center justify-between mb-8">
              <h3 className="text-3xl text-black font-semibold">
                Browse by Category
               </h3>
           </div>
          
          {/* Mobile seamless marquee with duplicate list*/}

        <div className='md:hidden overflow-hidden'>
          <div className="flex gap-3 animate-marquee" >
            {[...categories, ...categories].map((cat, i) => (
          
          <CategoryItem 
           
            key={`${cat.name}-${i}`}
            cat={cat}
            filter={filter}
            setFilter={setFilter} />
          
          ))}
          </div>
          </div>

    {/* desktop static layout */}

    <div className="hidden md:flex md:gap-9" >
      {categories.map((cat) => (

        <CategoryItem 
           
            key={cat.name}
            cat={cat}
            filter={filter}
            setFilter={setFilter} />
          
      ))}
    </div>
        </section>
        </div>
          )
        }