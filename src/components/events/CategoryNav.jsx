// src/components/CategoryNav.jsx

import { Mic, Music, Wine, Sparkles, Paintbrush, Church, Gamepad2, Briefcase, Volleyball, Laptop2Icon, LayoutGrid } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useRef } from "react";



const categories = [
  { 
    name: "Music", icon: Music ,
    bg: "bg-purple-200", text: "text-purple-500"
   },
  { 
    name: "Nightlife",  icon: Sparkles ,
     bg: "bg-pink-200", text: "text-pink-500"
     },
  { 
    name: "Arts", icon: Paintbrush ,
     bg: "bg-yellow-200", text: "text-yellow-500" 
     },
  { 
    name: "CodeAbuja", icon: Laptop2Icon ,
     bg: "bg-blue-200", text: "text-blue-500"
     },
  { 
    name: "Worship", icon: Church ,
     bg: "bg-neutral-200", text: "text-neutral-500"
      },
  { 
    name: "Hobbies", icon: Gamepad2 ,
     bg: "bg-orange-200", text: "text-orange-500"
     },
  { 
    name: "Business", icon: Briefcase ,
     bg: "bg-lime-200", text: "text-lime-500"
     },
  { 
    name: "Food & Drink", icon: Wine ,
     bg: "bg-green-200", text: "text-green-500"
     },
   { 
    name: "Sport", icon: Volleyball ,
    bg: "bg-red-200", text: "text-red-500"
     },
    { 
      name: "Concert", icon: Mic ,
      bg: "bg-amber-200", text: "text-amber-500"
    },
    { 
      name: "more", icon: LayoutGrid ,
      bg: "bg-gray-200", text: "text-gray-500"
       },
];






 function CategoryItem({ cat }) {
  const Icon = cat.icon;


  return (

    <NavLink
          to={`/events?category=${cat.name}`}
          className="flex flex-col items-center p-5 bg-white
                 transition-all duration-200 cursor-pointer hover:scale-105">

      <div className={`p-4 rounded-3xl mb-3 border hover:scale-105 transition-all duration-200
                   ${cat.bg} ${cat.text}`}>

                <Icon className='w-8 h-8 md:w-12 md:h-12' />
      </div>
              <p className="text-sm font-medium text-gray-700 whitespace-nowrap">{cat.name}</p>
      </NavLink>
          );
        }

        export default function CategoryNav() {

          const marqueeRef = useRef(null);
          const drag = useRef({ active: false, startX: 0, startOffset: 0});
    
          

          const onTouchStart = (e) => {
            
            const matrix = new DOMMatrix(window.getComputedStyle(marqueeRef.current).transform);
            const currentOffset = matrix.m41;

            
            //Freeze animation and switch to manual control
            marqueeRef.current.style.animationPlayState = "paused";
            marqueeRef.current.style.transform =`translateX(${currentOffset}px)`;
            marqueeRef.current.style.animationName = "none";

              
            drag.current = {
              active: true,
              startX: e.touches[0].clientX,
              startOffset: currentOffset,
            };
          };


          const onTouchMove = (e) => {
            if (!drag.current.active) return;
            e.preventDefault();

            const delta = e.touches[0].clientX - drag.current.startX;
            marqueeRef.current.style.transform = `translateX(${drag.current.startOffset + delta}px)`;
          };

          const onTouchEnd = () => {
            drag.current.active = false;
            if (!marqueeRef.current) return;

            
            //get position after drag
            const matrix = new DOMMatrix(window.getComputedStyle(marqueeRef.current).transform);
            const currentOffset = matrix.m41;
            const halfWidth = marqueeRef.current.scrollWidth / 2;
            const progress = Math.abs(currentOffset) / halfWidth;
            const duration = 18;
            const delay = -(progress * duration);

          
          //resume animation from drag end position
            marqueeRef.current.style.animationPlayState = "resume";
            marqueeRef.current.style.transform = "";
            marqueeRef.current.style.animationName = "marquee";
            marqueeRef.current.style.animationDelay = `${delay}s`;
            

        }; 

          return (
            <div className="w-full bg-white">      
             <section className="py-4 max-w-8xl px-4">

           <div className=" flex items-center justify-between">
              <h3 className="hidden md:block text-3xl text-black font-semibold">
                Browse by Category
               </h3>
           </div>
          
          {/* Mobile seamless marquee with duplicate list*/}

        <div 
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
         className='lg:hidden overflow-hidden pt-10 md:pt-0'>
          <div 
            ref={marqueeRef}
            className="flex gap-1 animate-marquee" >
            {[...categories, ...categories].map((cat, i) => (
          
          <CategoryItem 
           
            key={`${cat.name}-${i}`}
            cat={cat}
            
            />
          
          ))}
          </div>
          </div>

    {/* desktop static layout */}

    <div className="hidden lg:flex lg:gap-9" >
      {categories.map((cat) => (

        <CategoryItem 
            key={cat.name}
            cat={cat}
            
           />
          
      ))}
    </div>
        </section>
        </div>
          )
        }