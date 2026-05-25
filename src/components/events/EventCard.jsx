// EventCard.jsx
import React from 'react';
import { Heart, Share2 } from "lucide-react";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


const EventCard = ({ event }) => {

  const [isLiked, setLiked] = useState(false);
  const navigate = useNavigate();

  const handleLike = (e) => {
    e.stopPropagation();
    setLiked(!isLiked);
  }

  return (

    <div
      onClick={() => navigate(`/events/${event.id}`)}
      className="group cursor-pointer w-full bg-transparent hover:bg-white transition rounded-2xl shadow-none hover:shadow-lg overflow-hidden">   

       <div className="relative h-64 w-full group">
          <img 
            src={event.image} 
            alt="House 1"
            loading='lazy'
            className="w-full h-full object-cover"
           />
        
  

  {/* Action Icons */}
  <div
    className="
      absolute bottom-3 right-3
      flex gap-2
      opacity-100
      lg:opacity-0 lg:group-hover:opacity-100
      transition-opacity duration-200
    "
  >
    <button
     onClick={handleLike}
      className="bg-white/90 backdrop-blur p-2 rounded-full shadow hover:scale-110 transition"
      aria-label="Like event"
    >
      <Heart size={28} className={`${
        isLiked ? 'text-purple-600 fill-purple-600' : 'text-gray-800'} transition`} 
        />
    </button>

    <button
      onClick={(e) => {
        e.stopPropagation();
        // sharing functionality here
      }}
      className="bg-white/90 backdrop-blur p-2 rounded-full shadow hover:scale-110 transition"
      aria-label="Share event"
    >
      <Share2 size={24} className="text-gray-800 hover:text-purple-600" />
    </button>
  </div>
  </div>


        
      <div  className='p-5 text-left'>
           <h2 className="text-lg font-bold mb-2 text-gray-900">
            {event.title}
           </h2>

           <p className="text-base font-medium text-gray-800 mb-2">
               {event.date} •  {event.time}
           </p>
           <p className="text-base font-medium text-gray-900 mb-2">
               {event.location}
            </p>

         <div className="flex items-center justify-between">
           
        {event.price === 0 || event.price === "0" ? (
           <span className="text-green-600 font-semibold text-sm">
           Free
          </span>
          ) : event.price ? (
        <span className="text-gray-900 font-semibold text-sm">
           ₦{Number(event.price).toLocaleString()}
         </span>
         ) : (
        <span className="text-gray-500 text-sm">
         —
        </span>
       )}

      </div>
      </div>
    </div>
);
};

export default EventCard;

