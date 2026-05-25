import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from "@/components/layout/Header"
import EventHero from "@/components/events/EventHero"
import CategoryNav from "@/components/events/CategoryNav"
import FeaturedEvent from "@/components/events/FeaturedEvent"
import EventFilter from "@/components/events/EventFilter"
import EventCard from "@/components/events/EventCard"
import Footer from "@/components/layout/Footer"
import MobileSidebar  from '@/components/layout/MobileSidebar';
import LocationSelector  from '@/components/layout/LocationSelector';


import african from '@/assets/images/african.png';
import music from '@/assets/images/music.png'; 
import tech from '@/assets/images/tech.png';
import Features from '../../components/layout/Features';

const allEvents = [
  {
    image: music,
    title: "StarPulse Live - Join us for an unforgettable night of music and vibes!",
    date: "July 20, 2026",
    time: "6:00 PM",
    location: "Lagos, Nigeria",
    category: "Music",
  },
  {
    image: tech,
    title: "TechConf 2026 - Explore the latest trends in technology at TechConf 2026.",
    date: "August 5, 2026",
    time: "10:00 AM",
    location: "wuse, Abuja",
    category: "Tech",
  },
  {
    image: african,
    title: "Cultural Fest - Experience diverse African cultures in one place.",
    date: "September 10, 2026",
    time: "4:00 PM",
    location: "Enugu, Nigeria",
    category: "Culture",
  },
];

export default function Home() {
    const [filter, setFilter] = useState("All");

  const filteredEvents =
    filter === "All"
      ? allEvents
      : allEvents.filter((event) => event.category === filter);

  return (
    <div className="bg-white min-h-screen">
      {/* Fixed header */}
      <Header />

      {/* Hero slider */}
      <EventHero />

      
      {/* Category */}
      <CategoryNav filter={filter} setFilter={setFilter} />

      <FeaturedEvent />

{/* Event filter tabs */}
      <EventFilter />

      {/* Event list */}
      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 px-6 py-10"
      >
        {filteredEvents.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      

      {filteredEvents.length === 0 && (
        <p className="mt-10 text-center text-gray-400">
          No events found in this category.
        </p>
      )}
      </motion.div>

      <LocationSelector />

      <Features />

    {/*Footer */}
      <Footer />

      <MobileSidebar />
    </div>
  )
}
