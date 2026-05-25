import { Mic, Music, Wine, Sparkles, Paintbrush, Church, Gamepad2, Briefcase, Volleyball, Laptop2Icon } from "lucide-react";

const categories = [
  { name: "Music", icon: Music },
  { name: "Nightlife", icon: Sparkles },
  { name: "Arts", icon: Paintbrush },
  { name: "CodeAbuja", icon: Laptop2Icon },
  { name: "Worship", icon: Church },
  { name: "Hobbies", icon: Gamepad2 },
  { name: "Business", icon: Briefcase },
  { name: "Food & Drink", icon: Wine },
  { name: "Sport", icon: Volleyball },
  { name: "Concert", icon: Mic },
];

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
    

   
    </motion.div> 
  );
}

    
    
  


